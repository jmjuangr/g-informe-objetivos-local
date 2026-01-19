import { getItemsExport, getInstructions, getWorkLines } from "./catalog.js";
import {
  addSelection,
  exportDraft,
  getReportState,
  importDraft,
  plazoOptions,
  removeSelection,
  setHeader,
  setObservations,
  setPlazo
} from "./state.js";
import { generatePdf } from "./pdf.js";

const buildOption = (value, label) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  return option;
};

export const initPublic = ({ showToast }) => {
  const entityInput = document.querySelector("#header-entity");
  const managerInput = document.querySelector("#header-manager");
  const instructionSelect = document.querySelector("#filter-instruction");
  const workLineSelect = document.querySelector("#filter-work-line");
  const availableContainer = document.querySelector("#available-items");
  const selectedBody = document.querySelector("#selected-items");
  const addSelectedButton = document.querySelector("#add-selected");
  const exportButton = document.querySelector("#export-draft");
  const importInput = document.querySelector("#import-draft");
  const pdfButton = document.querySelector("#generate-pdf");

  let itemsExport = getItemsExport();

  const renderWorkLineOptions = (instructionId, preferredValue = "") => {
    workLineSelect.innerHTML = "";
    workLineSelect.appendChild(buildOption("", "Todas"));
    if (!instructionId) {
      workLineSelect.disabled = true;
      return;
    }

    const validLineIds = new Set(
      itemsExport.filter((item) => item.instruction_uuid === instructionId).map((item) => item.work_line_uuid)
    );
    if (!validLineIds.size) {
      workLineSelect.disabled = true;
      return;
    }

    getWorkLines().forEach((workLine) => {
      if (!validLineIds.has(workLine.id)) return;
      workLineSelect.appendChild(
        buildOption(workLine.id, `${workLine.code} - ${workLine.display_name}`)
      );
    });

    workLineSelect.disabled = false;
    if (preferredValue && validLineIds.has(preferredValue)) {
      workLineSelect.value = preferredValue;
    } else {
      workLineSelect.value = "";
    }
  };

  const renderFilters = () => {
    const currentInstruction = instructionSelect.value;
    const currentWorkLine = workLineSelect.value;

    instructionSelect.innerHTML = "";
    instructionSelect.appendChild(buildOption("", "Todas"));
    getInstructions().forEach((instruction) => {
      instructionSelect.appendChild(buildOption(instruction.id, instruction.name));
    });

    if (currentInstruction) {
      instructionSelect.value = currentInstruction;
    }

    renderWorkLineOptions(instructionSelect.value, currentWorkLine);
  };

  const renderAvailable = () => {
    const { selections } = getReportState();
    const selectedIds = new Set(selections.map((entry) => entry.item_uuid));
    const instructionFilter = instructionSelect.value;
    const workLineFilter = workLineSelect.value;

    const filtered = itemsExport.filter((item) => {
      if (selectedIds.has(item.item_uuid)) return false;
      if (instructionFilter && item.instruction_uuid !== instructionFilter) return false;
      if (workLineFilter && item.work_line_uuid !== workLineFilter) return false;
      return true;
    });

    availableContainer.innerHTML = "";

    if (!filtered.length) {
      const message = document.createElement("p");
      message.className = "muted";
      message.textContent = "No hay ítems disponibles.";
      availableContainer.appendChild(message);
      return;
    }

    const grouped = filtered.reduce((acc, item) => {
      if (!acc.has(item.instruction_uuid)) {
        acc.set(item.instruction_uuid, { label: item.instruction, items: [] });
      }
      acc.get(item.instruction_uuid).items.push(item);
      return acc;
    }, new Map());

    grouped.forEach((group, instructionId) => {
      const details = document.createElement("details");
      details.open = true;

      const summary = document.createElement("summary");
      const summaryContent = document.createElement("div");
      summaryContent.className = "accordion-summary";

      const summaryCheckbox = document.createElement("input");
      summaryCheckbox.type = "checkbox";
      summaryCheckbox.className = "instruction-select";
      summaryCheckbox.dataset.instructionId = instructionId;

      const summaryLabel = document.createElement("span");
      summaryLabel.textContent = `${group.label} (${group.items.length})`;

      summaryContent.appendChild(summaryCheckbox);
      summaryContent.appendChild(summaryLabel);
      summary.appendChild(summaryContent);
      details.appendChild(summary);

      const content = document.createElement("div");
      content.className = "accordion-content";

      group.items.forEach((item) => {
        const row = document.createElement("div");
        row.className = "item-row";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.itemId = item.item_uuid;

        const code = document.createElement("div");
        code.className = "item-code";
        code.textContent = item.item_code;

        const title = document.createElement("div");
        title.className = "item-title";
        title.textContent = item.title;

        const line = document.createElement("div");
        line.className = "item-meta";
        line.textContent = item.work_line;

        row.appendChild(checkbox);
        row.appendChild(code);
        row.appendChild(title);
        row.appendChild(line);
        content.appendChild(row);
      });

      summaryCheckbox.addEventListener("click", (event) => {
        event.stopPropagation();
      });

      summaryCheckbox.addEventListener("change", (event) => {
        const shouldCheck = event.target.checked;
        content.querySelectorAll("input[type=\"checkbox\"][data-item-id]").forEach((checkbox) => {
          checkbox.checked = shouldCheck;
        });
      });

      details.appendChild(content);
      availableContainer.appendChild(details);
    });
  };

  const renderSelected = () => {
    const { selections } = getReportState();
    selectedBody.innerHTML = "";

    if (!selections.length) {
      const row = document.createElement("tr");
      row.innerHTML = `<td colspan="5" class="muted">No has seleccionado ítems.</td>`;
      selectedBody.appendChild(row);
      return;
    }

    selections.forEach((item) => {
      const row = document.createElement("tr");
      const plazoSelect = document.createElement("select");
      plazoSelect.appendChild(buildOption("", "Selecciona"));
      plazoOptions.forEach((option) => plazoSelect.appendChild(buildOption(option, option)));
      plazoSelect.value = item.plazo;
      plazoSelect.addEventListener("change", (event) => {
        setPlazo(item.item_uuid, event.target.value);
      });

      const observationsInput = document.createElement("input");
      observationsInput.type = "text";
      observationsInput.placeholder = "Observaciones";
      observationsInput.value = item.observations || "";
      observationsInput.addEventListener("input", (event) => {
        setObservations(item.item_uuid, event.target.value);
      });

      row.innerHTML = `
        <td>${item.item_code}</td>
        <td>${item.title}</td>
        <td></td>
        <td></td>
        <td><button data-id="${item.item_uuid}" class="secondary">Quitar</button></td>
      `;
      const cells = row.querySelectorAll("td");
      cells[2].appendChild(plazoSelect);
      cells[3].appendChild(observationsInput);

      row.querySelector("button").addEventListener("click", () => {
        removeSelection(item.item_uuid);
        renderSelected();
        renderAvailable();
      });
      selectedBody.appendChild(row);
    });
  };

  const renderHeader = () => {
    const { header } = getReportState();
    entityInput.value = header.entity;
    managerInput.value = header.manager;
  };

  const refresh = () => {
    itemsExport = getItemsExport();
    renderFilters();
    renderAvailable();
    renderSelected();
    renderHeader();
  };

  entityInput.addEventListener("input", (event) => {
    setHeader({ entity: event.target.value });
  });

  managerInput.addEventListener("input", (event) => {
    setHeader({ manager: event.target.value });
  });

  instructionSelect.addEventListener("change", () => {
    renderWorkLineOptions(instructionSelect.value);
    renderAvailable();
  });
  workLineSelect.addEventListener("change", renderAvailable);

  addSelectedButton.addEventListener("click", () => {
    const { selections } = getReportState();
    const selectedIds = new Set(selections.map((entry) => entry.item_uuid));
    const toAdd = [];
    availableContainer.querySelectorAll("input[type=\"checkbox\"][data-item-id]").forEach((checkbox) => {
      if (!checkbox.checked) return;
      const item = itemsExport.find((entry) => entry.item_uuid === checkbox.dataset.itemId);
      if (item && !selectedIds.has(item.item_uuid)) {
        toAdd.push(item);
      }
    });

    if (!toAdd.length) {
      showToast("Selecciona al menos un ítem.");
      return;
    }

    toAdd.forEach((item) => addSelection(item));
    renderSelected();
    renderAvailable();
    showToast("Ítems añadidos.");
  });

  exportButton.addEventListener("click", () => {
    const blob = new Blob([exportDraft()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "borrador-informe.json";
    link.click();
    URL.revokeObjectURL(url);
    showToast("Borrador exportado.");
  });

  importInput.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const content = await file.text();
      importDraft(JSON.parse(content));
      refresh();
      showToast("Borrador importado.");
    } catch (error) {
      showToast("No se pudo importar el borrador.");
    } finally {
      event.target.value = "";
    }
  });

  pdfButton.addEventListener("click", async () => {
    const { selections } = getReportState();
    if (!selections.length) {
      showToast("Selecciona al menos un ítem.");
      return;
    }

    const missingPlazo = selections.some((entry) => !entry.plazo);
    if (missingPlazo) {
      showToast("Todos los ítems necesitan un plazo.");
      return;
    }

    try {
      const bytes = await generatePdf(getReportState());
      const blob = new Blob([bytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "informe-objetivos.pdf";
      link.click();
      URL.revokeObjectURL(url);
      showToast("PDF generado.");
    } catch (error) {
      showToast("No se pudo generar el PDF.");
    }
  });

  refresh();

  return { refresh };
};
