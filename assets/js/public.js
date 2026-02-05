(function () {
var app = window.App || (window.App = {});
const { getItemsExport, getInstructions, getWorkLines } = app.catalog;
const {
  addSelection,
  exportDraft,
  getReportState,
  getLanguage,
  importDraft,
  getPlazoOptions,
  removeSelection,
  setLanguage,
  setHeader,
  setObservations,
  setPlazo,
  syncSelectionsFromCatalog
} = app.state;
const { generatePdf } = app.pdf;
const { generateDocx } = app.docx;

  const observationsLabelByLanguage = {
    es: "Observaciones",
    ca: "Observacions",
    va: "Observacions",
    gl: "Observacións",
    eu: "Observaciones"
  };

  const getObservationsLabel = (language) =>
    observationsLabelByLanguage[language] || observationsLabelByLanguage.es;

  const buildOption = (value, label) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    return option;
  };

  const buildExportFilename = (entity, extension) => {
    const safeEntity = String(entity || "")
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "_")
      .replace(/_+/g, "_")
      .replace(/^_+|_+$/g, "");
    return `informe_objetivos_2026_${safeEntity || "entidad"}.${extension}`;
  };

  const buildWorkLineSortMaps = (language) => {
    const byId = new Map();
    const byName = new Map();
    getWorkLines(language).forEach((workLine, index) => {
      const sortValue = Number.isFinite(workLine.sort_order) ? workLine.sort_order : index;
      byId.set(workLine.id, sortValue);
      byName.set(workLine.display_name, sortValue);
    });
    return { byId, byName };
  };

  const getWorkLineSortValue = (item, maps) => {
    if (Number.isFinite(item.work_line_sort_order)) return item.work_line_sort_order;
    if (item.work_line_uuid && maps.byId.has(item.work_line_uuid)) {
      return maps.byId.get(item.work_line_uuid);
    }
    if (item.work_line && maps.byName.has(item.work_line)) {
      return maps.byName.get(item.work_line);
    }
    return Number.MAX_SAFE_INTEGER;
  };

  const compareItemsByWorkLine = (a, b, maps) => {
    const orderA = getWorkLineSortValue(a, maps);
    const orderB = getWorkLineSortValue(b, maps);
    if (orderA !== orderB) return orderA - orderB;
    const codeA = String(a.work_line_code || "");
    const codeB = String(b.work_line_code || "");
    if (codeA !== codeB) return codeA.localeCompare(codeB);
    return String(a.title || "").localeCompare(String(b.title || ""));
  };

const initPublic = ({ showToast }) => {
  const entityInput = document.querySelector("#header-entity");
  const logoSelect = document.querySelector("#header-logo");
  const languageSelect = document.querySelector("#header-language");
  const managerInput = document.querySelector("#header-manager");
  const instructionSelect = document.querySelector("#filter-instruction");
  const workLineSelect = document.querySelector("#filter-work-line");
  const availableContainer = document.querySelector("#available-items");
  const selectedContainer = document.querySelector("#selected-items");
  const addSelectedButton = document.querySelector("#add-selected");
  const clearFiltersButton = document.querySelector("#clear-filters");
  const selectedInstructionSelect = document.querySelector("#selected-filter-instruction");
  const selectedWorkLineSelect = document.querySelector("#selected-filter-work-line");
  const removeSelectedButton = document.querySelector("#remove-selected");
  const clearSelectedFiltersButton = document.querySelector("#clear-selected-filters");
  const exportButton = document.querySelector("#export-draft");
  const importInput = document.querySelector("#import-draft");
  const docxButton = document.querySelector("#export-docx");
  const pdfButton = document.querySelector("#generate-pdf");

  let currentLanguage = getLanguage();
  let itemsExport = getItemsExport(currentLanguage);

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

    getWorkLines(currentLanguage).forEach((workLine) => {
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

  const renderSelectedWorkLineOptions = (instructionId, preferredValue = "") => {
    selectedWorkLineSelect.innerHTML = "";
    selectedWorkLineSelect.appendChild(buildOption("", "Todas"));
    if (!instructionId) {
      selectedWorkLineSelect.disabled = true;
      return;
    }

    const { selections } = getReportState();
    const instructionNameById = new Map(
      getInstructions(currentLanguage).map((instruction) => [instruction.id, instruction.name])
    );
    const workLineIdByName = new Map(
      getWorkLines(currentLanguage).map((workLine) => [workLine.display_name, workLine.id])
    );
    const instructionName = instructionNameById.get(instructionId);
    const validLineIds = new Set();

    selections.forEach((item) => {
      if (item.instruction_uuid) {
        if (item.instruction_uuid !== instructionId) return;
        if (item.work_line_uuid) validLineIds.add(item.work_line_uuid);
        return;
      }
      if (instructionName && item.instruction !== instructionName) return;
      const lineId = item.work_line_uuid || workLineIdByName.get(item.work_line);
      if (lineId) validLineIds.add(lineId);
    });

    if (!validLineIds.size) {
      selectedWorkLineSelect.disabled = true;
      return;
    }

    getWorkLines(currentLanguage).forEach((workLine) => {
      if (!validLineIds.has(workLine.id)) return;
      selectedWorkLineSelect.appendChild(
        buildOption(workLine.id, `${workLine.code} - ${workLine.display_name}`)
      );
    });

    selectedWorkLineSelect.disabled = false;
    if (preferredValue && validLineIds.has(preferredValue)) {
      selectedWorkLineSelect.value = preferredValue;
    } else {
      selectedWorkLineSelect.value = "";
    }
  };

  const renderFilters = () => {
    const currentInstruction = instructionSelect.value;
    const currentWorkLine = workLineSelect.value;

    instructionSelect.innerHTML = "";
    instructionSelect.appendChild(buildOption("", "Todas"));
    getInstructions(currentLanguage).forEach((instruction) => {
      instructionSelect.appendChild(buildOption(instruction.id, instruction.name));
    });

    if (currentInstruction) {
      instructionSelect.value = currentInstruction;
    }

    renderWorkLineOptions(instructionSelect.value, currentWorkLine);
  };

  const renderSelectedFilters = () => {
    const currentInstruction = selectedInstructionSelect.value;
    const currentWorkLine = selectedWorkLineSelect.value;

    selectedInstructionSelect.innerHTML = "";
    selectedInstructionSelect.appendChild(buildOption("", "Todas"));
    getInstructions(currentLanguage).forEach((instruction) => {
      selectedInstructionSelect.appendChild(buildOption(instruction.id, instruction.name));
    });

    if (currentInstruction) {
      selectedInstructionSelect.value = currentInstruction;
    }

    renderSelectedWorkLineOptions(selectedInstructionSelect.value, currentWorkLine);
  };

  const renderAvailable = () => {
    const { selections } = getReportState();
    const selectedIds = new Set(selections.map((entry) => entry.item_uuid));
    const instructionFilter = instructionSelect.value;
    const workLineFilter = workLineSelect.value;
    const workLineMaps = buildWorkLineSortMaps(currentLanguage);

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
      details.open = false;

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

      group.items.sort((a, b) => compareItemsByWorkLine(a, b, workLineMaps));
      group.items.forEach((item) => {
        const row = document.createElement("div");
        row.className = "item-row";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.itemId = item.item_uuid;

        const title = document.createElement("div");
        title.className = "item-title";
        title.textContent = item.title;

        const line = document.createElement("div");
        line.className = "item-meta";
        line.textContent = item.work_line;

        const addButton = document.createElement("button");
        addButton.textContent = "Añadir";
        addButton.className = "secondary";
        addButton.addEventListener("click", () => {
          addSelection(item);
          renderSelected();
          renderAvailable();
        });

        row.appendChild(checkbox);
        row.appendChild(title);
        row.appendChild(line);
        row.appendChild(addButton);
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
    selectedContainer.innerHTML = "";

    if (!selections.length) {
      const message = document.createElement("p");
      message.className = "muted";
      message.textContent = "No has seleccionado ítems.";
      selectedContainer.appendChild(message);
      return;
    }

    const instructionFilter = selectedInstructionSelect.value;
    const workLineFilter = selectedWorkLineSelect.value;
    const instructionNameById = new Map(
      getInstructions(currentLanguage).map((instruction) => [instruction.id, instruction.name])
    );
    const workLineNameById = new Map(
      getWorkLines(currentLanguage).map((workLine) => [workLine.id, workLine.display_name])
    );
    const workLineMaps = buildWorkLineSortMaps(currentLanguage);

    const filtered = selections.filter((item) => {
      if (instructionFilter) {
        if (item.instruction_uuid) {
          if (item.instruction_uuid !== instructionFilter) return false;
        } else if (item.instruction !== instructionNameById.get(instructionFilter)) {
          return false;
        }
      }
      if (workLineFilter) {
        if (item.work_line_uuid) {
          if (item.work_line_uuid !== workLineFilter) return false;
        } else if (item.work_line !== workLineNameById.get(workLineFilter)) {
          return false;
        }
      }
      return true;
    });

    if (!filtered.length) {
      const message = document.createElement("p");
      message.className = "muted";
      message.textContent = "No hay ítems seleccionados para los filtros.";
      selectedContainer.appendChild(message);
      return;
    }

    const grouped = filtered.reduce((acc, item) => {
      const groupId = item.instruction_uuid || `name:${item.instruction}`;
      if (!acc.has(groupId)) {
        acc.set(groupId, {
          label: item.instruction || instructionNameById.get(item.instruction_uuid) || "Sin instrucción",
          items: []
        });
      }
      acc.get(groupId).items.push(item);
      return acc;
    }, new Map());

    grouped.forEach((group, instructionId) => {
      const details = document.createElement("details");
      details.open = false;

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

      group.items.sort((a, b) => compareItemsByWorkLine(a, b, workLineMaps));
      group.items.forEach((item) => {
        const row = document.createElement("div");
        row.className = "item-row selected-row";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.itemId = item.item_uuid;

        const title = document.createElement("div");
        title.className = "item-title";
        title.textContent = item.title;

      const plazoSelect = document.createElement("select");
      plazoSelect.appendChild(buildOption("", "Selecciona"));
      getPlazoOptions(currentLanguage).forEach((option) =>
        plazoSelect.appendChild(buildOption(option, option))
      );
      plazoSelect.value = item.plazo;
      plazoSelect.addEventListener("change", (event) => {
        setPlazo(item.item_uuid, event.target.value);
      });

      const observationsInput = document.createElement("input");
      observationsInput.type = "text";
      observationsInput.placeholder = getObservationsLabel(currentLanguage);
      observationsInput.value = item.observations || "";
      observationsInput.addEventListener("input", (event) => {
        setObservations(item.item_uuid, event.target.value);
      });

        const removeButton = document.createElement("button");
        removeButton.textContent = "Quitar";
        removeButton.className = "secondary";
        removeButton.addEventListener("click", () => {
          removeSelection(item.item_uuid);
          renderSelected();
          renderAvailable();
        });

        row.appendChild(checkbox);
        row.appendChild(title);
        row.appendChild(plazoSelect);
        row.appendChild(observationsInput);
        row.appendChild(removeButton);
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
      selectedContainer.appendChild(details);
    });
  };

  const renderHeader = () => {
    const { header } = getReportState();
    entityInput.value = header.entity;
    managerInput.value = header.manager;
    if (logoSelect) {
      logoSelect.value = header.logo || "";
    }
    if (languageSelect) {
      languageSelect.value = currentLanguage;
    }
  };

  const refresh = () => {
    currentLanguage = getLanguage();
    itemsExport = getItemsExport(currentLanguage);
    syncSelectionsFromCatalog(itemsExport);
    renderFilters();
    renderSelectedFilters();
    renderAvailable();
    renderSelected();
    renderHeader();
  };

  entityInput.addEventListener("input", (event) => {
    setHeader({ entity: event.target.value });
  });

  if (logoSelect) {
    logoSelect.addEventListener("change", (event) => {
      setHeader({ logo: event.target.value });
    });
  }

  managerInput.addEventListener("input", (event) => {
    setHeader({ manager: event.target.value });
  });

  if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
      setLanguage(event.target.value);
      refresh();
    });
  }

  instructionSelect.addEventListener("change", () => {
    renderWorkLineOptions(instructionSelect.value);
    renderAvailable();
  });
  workLineSelect.addEventListener("change", renderAvailable);

  clearFiltersButton.addEventListener("click", () => {
    instructionSelect.value = "";
    renderWorkLineOptions("");
    renderAvailable();
  });

  selectedInstructionSelect.addEventListener("change", () => {
    renderSelectedWorkLineOptions(selectedInstructionSelect.value);
    renderSelected();
  });
  selectedWorkLineSelect.addEventListener("change", renderSelected);

  clearSelectedFiltersButton.addEventListener("click", () => {
    selectedInstructionSelect.value = "";
    renderSelectedWorkLineOptions("");
    renderSelected();
  });

  removeSelectedButton.addEventListener("click", () => {
    const toRemove = [];
    selectedContainer.querySelectorAll("input[type=\"checkbox\"][data-item-id]").forEach((checkbox) => {
      if (!checkbox.checked) return;
      toRemove.push(checkbox.dataset.itemId);
    });

    if (!toRemove.length) {
      showToast("Selecciona al menos un ítem.");
      return;
    }

    toRemove.forEach((id) => removeSelection(id));
    renderSelected();
    renderAvailable();
    showToast("Ítems quitados.");
  });

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
    const { header } = getReportState();
    if (!header.entity.trim() || !header.manager.trim()) {
      showToast("Completa Entidad y Gestor/a antes de exportar.");
      return;
    }
    const blob = new Blob([exportDraft()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = buildExportFilename(header.entity, "json");
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

  docxButton.addEventListener("click", async () => {
    const { header, selections } = getReportState();
    if (!selections.length) {
      showToast("Selecciona al menos un ítem.");
      return;
    }
    if (!header.entity.trim() || !header.manager.trim()) {
      showToast("Completa Entidad y Gestor/a antes de exportar.");
      return;
    }

    try {
      const blob = await generateDocx(getReportState());
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = buildExportFilename(header.entity, "docx");
      link.click();
      URL.revokeObjectURL(url);
      showToast("Word generado.");
    } catch (error) {
      showToast("No se pudo generar el Word.");
    }
  });

  pdfButton.addEventListener("click", async () => {
    const { header, selections } = getReportState();
    if (!selections.length) {
      showToast("Selecciona al menos un ítem.");
      return;
    }
    if (!header.entity.trim() || !header.manager.trim()) {
      showToast("Completa Entidad y Gestor/a antes de exportar.");
      return;
    }

    try {
      const bytes = await generatePdf(getReportState());
      const blob = new Blob([bytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = buildExportFilename(header.entity, "pdf");
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

app.initPublic = initPublic;
})();
