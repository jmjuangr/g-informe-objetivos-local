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
  const availableBody = document.querySelector("#available-items");
  const selectedBody = document.querySelector("#selected-items");
  const exportButton = document.querySelector("#export-draft");
  const importInput = document.querySelector("#import-draft");
  const pdfButton = document.querySelector("#generate-pdf");

  let itemsExport = getItemsExport();

  const renderFilters = () => {
    instructionSelect.innerHTML = "";
    workLineSelect.innerHTML = "";

    instructionSelect.appendChild(buildOption("", "Todas"));
    getInstructions().forEach((instruction) => {
      instructionSelect.appendChild(buildOption(instruction.id, instruction.name));
    });

    workLineSelect.appendChild(buildOption("", "Todas"));
    getWorkLines().forEach((workLine) => {
      workLineSelect.appendChild(buildOption(workLine.id, `${workLine.code} - ${workLine.display_name}`));
    });
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

    availableBody.innerHTML = "";

    if (!filtered.length) {
      const row = document.createElement("tr");
      row.innerHTML = `<td colspan="5" class="muted">No hay ítems disponibles.</td>`;
      availableBody.appendChild(row);
      return;
    }

    filtered.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.item_code}</td>
        <td>${item.title}</td>
        <td>${item.instruction}</td>
        <td>${item.work_line}</td>
        <td><button data-id="${item.item_uuid}" class="secondary">Añadir</button></td>
      `;
      row.querySelector("button").addEventListener("click", () => {
        addSelection(item);
        renderSelected();
        renderAvailable();
      });
      availableBody.appendChild(row);
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

  instructionSelect.addEventListener("change", renderAvailable);
  workLineSelect.addEventListener("change", renderAvailable);

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
