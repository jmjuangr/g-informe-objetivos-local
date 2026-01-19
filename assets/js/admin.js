import { dbApi } from "./db.js";

const ENTITIES = {
  commissions: {
    label: "Comisiones",
    fields: [
      { name: "name", label: "Nombre", type: "text", required: true }
    ],
    columns: ["name"]
  },
  instructions: {
    label: "Instrucciones",
    fields: [
      { name: "commission_id", label: "Comisión", type: "select", required: true, source: "commissions" },
      { name: "name", label: "Nombre", type: "text", required: true },
      { name: "legacy_instruction_id", label: "ID legado", type: "text" }
    ],
    columns: ["name", "commission"]
  },
  matters: {
    label: "Materias",
    fields: [
      { name: "instruction_id", label: "Instrucción", type: "select", required: true, source: "instructions" },
      { name: "name", label: "Nombre", type: "text", required: true }
    ],
    columns: ["name", "instruction"]
  },
  submatters: {
    label: "Submaterias",
    fields: [
      { name: "matter_id", label: "Materia", type: "select", required: true, source: "matters" },
      { name: "name", label: "Nombre", type: "text", required: true }
    ],
    columns: ["name", "matter"]
  },
  work_lines: {
    label: "Líneas de trabajo",
    fields: [
      { name: "code", label: "Código", type: "text", required: true },
      { name: "display_name", label: "Nombre", type: "text", required: true },
      { name: "sort_order", label: "Orden", type: "number", required: true }
    ],
    columns: ["code", "display_name", "sort_order"]
  },
  items_objetivo: {
    label: "Ítems objetivo",
    fields: [
      { name: "instruction_id", label: "Instrucción", type: "select", required: true, source: "instructions" },
      { name: "submatter_id", label: "Submateria", type: "select", required: true, source: "submatters" },
      { name: "work_line_id", label: "Línea de trabajo", type: "select", required: true, source: "work_lines" },
      { name: "title", label: "Título", type: "text", required: true },
      { name: "status", label: "Estado", type: "text", required: true },
      { name: "legacy_item_code", label: "Código legado", type: "text" },
      { name: "year", label: "Año", type: "number", required: true, fixed: 2026 }
    ],
    columns: ["legacy_item_code", "title", "instruction", "work_line", "year"]
  }
};

const buildOption = (value, label) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  return option;
};

const getEntityLabel = (entityKey, id) => {
  if (!id) return "";
  const entry = dbApi[entityKey].get(id);
  return entry?.name || entry?.display_name || entry?.title || "";
};

export const initAdmin = ({ showToast, onCatalogUpdated }) => {
  const entitySelect = document.querySelector("#admin-entity");
  const searchInput = document.querySelector("#admin-search");
  const form = document.querySelector("#admin-form");
  const formTitle = document.querySelector("#admin-form-title");
  const saveButton = document.querySelector("#admin-save");
  const cancelButton = document.querySelector("#admin-cancel");
  const tableHead = document.querySelector("#admin-table-head");
  const tableBody = document.querySelector("#admin-table-body");

  let currentEntity = "commissions";
  let editingId = null;

  const buildEntityOptions = () => {
    entitySelect.innerHTML = "";
    Object.entries(ENTITIES).forEach(([key, value]) => {
      entitySelect.appendChild(buildOption(key, value.label));
    });
  };

  const getFormValues = () => {
    const values = {};
    ENTITIES[currentEntity].fields.forEach((field) => {
      const input = form.querySelector(`[name="${field.name}"]`);
      if (!input) return;
      if (field.type === "number") {
        values[field.name] = input.value ? Number(input.value) : "";
      } else {
        values[field.name] = input.value.trim();
      }
    });
    return values;
  };

  const setFormValues = (values) => {
    ENTITIES[currentEntity].fields.forEach((field) => {
      const input = form.querySelector(`[name="${field.name}"]`);
      if (!input) return;
      if (field.fixed) {
        input.value = field.fixed;
        return;
      }
      input.value = values?.[field.name] ?? "";
    });
  };

  const resetForm = () => {
    editingId = null;
    formTitle.textContent = "Crear / editar";
    setFormValues({});
  };

  const buildForm = () => {
    form.innerHTML = "";
    ENTITIES[currentEntity].fields.forEach((field) => {
      const wrapper = document.createElement("label");
      wrapper.textContent = field.label;

      let input;
      if (field.type === "select") {
        input = document.createElement("select");
        input.appendChild(buildOption("", "Selecciona"));
        const options = dbApi[field.source].list();
        options.forEach((option) => {
          const label = option.name || option.display_name || option.title || option.code;
          input.appendChild(buildOption(option.id, label));
        });
      } else if (field.type === "number") {
        input = document.createElement("input");
        input.type = "number";
      } else {
        input = document.createElement("input");
        input.type = "text";
      }

      input.name = field.name;
      if (field.required) {
        input.required = true;
      }
      if (field.fixed) {
        input.value = field.fixed;
        input.disabled = true;
      }
      wrapper.appendChild(input);
      form.appendChild(wrapper);
    });
  };

  const buildTable = () => {
    const config = ENTITIES[currentEntity];
    tableHead.innerHTML = "";
    const headRow = document.createElement("tr");
    config.columns.forEach((column) => {
      const th = document.createElement("th");
      th.textContent = column.toUpperCase();
      headRow.appendChild(th);
    });
    const actionTh = document.createElement("th");
    actionTh.textContent = "Acciones";
    headRow.appendChild(actionTh);
    tableHead.appendChild(headRow);
  };

  const buildTableRows = () => {
    const config = ENTITIES[currentEntity];
    const searchTerm = searchInput.value.trim().toLowerCase();

    let entries = dbApi[currentEntity].list();

    if (currentEntity === "items_objetivo") {
      entries = entries.slice().sort((a, b) => {
        const instructionA = getEntityLabel("instructions", a.instruction_id);
        const instructionB = getEntityLabel("instructions", b.instruction_id);
        const lineA = getEntityLabel("work_lines", a.work_line_id);
        const lineB = getEntityLabel("work_lines", b.work_line_id);
        return instructionA.localeCompare(instructionB) || lineA.localeCompare(lineB);
      });
    }

    if (searchTerm) {
      entries = entries.filter((entry) => JSON.stringify(entry).toLowerCase().includes(searchTerm));
    }

    tableBody.innerHTML = "";

    if (!entries.length) {
      const row = document.createElement("tr");
      row.innerHTML = `<td colspan="${config.columns.length + 1}" class="muted">Sin registros.</td>`;
      tableBody.appendChild(row);
      return;
    }

    entries.forEach((entry) => {
      const row = document.createElement("tr");
      config.columns.forEach((column) => {
        const cell = document.createElement("td");
        if (column === "commission") {
          cell.textContent = getEntityLabel("commissions", entry.commission_id);
        } else if (column === "instruction") {
          cell.textContent = getEntityLabel("instructions", entry.instruction_id);
        } else if (column === "matter") {
          cell.textContent = getEntityLabel("matters", entry.matter_id);
        } else if (column === "work_line") {
          cell.textContent = getEntityLabel("work_lines", entry.work_line_id);
        } else if (column === "legacy_item_code") {
          cell.textContent = entry.legacy_item_code || "—";
        } else {
          cell.textContent = entry[column] ?? "";
        }
        row.appendChild(cell);
      });

      const actions = document.createElement("td");
      const editBtn = document.createElement("button");
      editBtn.textContent = "Editar";
      editBtn.className = "secondary";
      editBtn.addEventListener("click", () => {
        editingId = entry.id;
        formTitle.textContent = "Editando";
        setFormValues(entry);
      });
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Borrar";
      deleteBtn.addEventListener("click", () => {
        if (confirm("¿Eliminar este registro?")) {
          dbApi[currentEntity].remove(entry.id);
          buildForm();
          buildTableRows();
          onCatalogUpdated();
          showToast("Registro eliminado.");
        }
      });

      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
      actions.className = "actions";
      row.appendChild(actions);
      tableBody.appendChild(row);
    });
  };

  const refresh = () => {
    buildForm();
    buildTable();
    buildTableRows();
  };

  entitySelect.addEventListener("change", (event) => {
    currentEntity = event.target.value;
    resetForm();
    refresh();
  });

  searchInput.addEventListener("input", buildTableRows);

  saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    const config = ENTITIES[currentEntity];
    const values = getFormValues();

    const missingRequired = config.fields.some(
      (field) => field.required && !values[field.name] && values[field.name] !== 0
    );
    if (missingRequired) {
      showToast("Completa los campos requeridos.");
      return;
    }

    const payload = {
      ...values,
      year: config.fields.find((field) => field.name === "year")?.fixed || values.year
    };

    if (editingId) {
      dbApi[currentEntity].update({ ...payload, id: editingId });
      showToast("Registro actualizado.");
    } else {
      dbApi[currentEntity].create(payload);
      showToast("Registro creado.");
    }

    resetForm();
    refresh();
    onCatalogUpdated();
  });

  cancelButton.addEventListener("click", () => {
    resetForm();
  });

  buildEntityOptions();
  entitySelect.value = currentEntity;
  refresh();

  return { refresh };
};
