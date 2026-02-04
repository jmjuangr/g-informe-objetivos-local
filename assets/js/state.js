(function () {
var app = window.App || (window.App = {});

const LANGUAGE_STORAGE_KEY = "ui_language_v1";

const defaultState = () => ({
  header: {
    entity: "",
    manager: "",
    logo: "Gestiona"
  },
  selections: []
});

let reportState = defaultState();
let uiLanguage = "es";
localStorage.setItem(LANGUAGE_STORAGE_KEY, uiLanguage);

const getReportState = () => structuredClone(reportState);

const getLanguage = () => uiLanguage;

const setLanguage = (language) => {
  uiLanguage = language || "es";
  localStorage.setItem(LANGUAGE_STORAGE_KEY, uiLanguage);
};

const setHeader = (payload) => {
  reportState = {
    ...reportState,
    header: {
      ...reportState.header,
      ...payload
    }
  };
};

const resetReport = () => {
  reportState = defaultState();
};

const addSelection = (item) => {
  if (reportState.selections.some((entry) => entry.item_uuid === item.item_uuid)) {
    return;
  }
  reportState = {
    ...reportState,
    selections: [
      ...reportState.selections,
      {
        ...item,
        instruction_uuid: item.instruction_uuid || "",
        work_line_uuid: item.work_line_uuid || "",
        work_line_code: item.work_line_code || "",
        work_line_sort_order: Number.isFinite(item.work_line_sort_order)
          ? item.work_line_sort_order
          : null,
        plazo: "",
        observations: ""
      }
    ]
  };
};

const removeSelection = (itemUuid) => {
  reportState = {
    ...reportState,
    selections: reportState.selections.filter((entry) => entry.item_uuid !== itemUuid)
  };
};

const setPlazo = (itemUuid, plazo) => {
  reportState = {
    ...reportState,
    selections: reportState.selections.map((entry) =>
      entry.item_uuid === itemUuid ? { ...entry, plazo } : entry
    )
  };
};

const setObservations = (itemUuid, observations) => {
  reportState = {
    ...reportState,
    selections: reportState.selections.map((entry) =>
      entry.item_uuid === itemUuid ? { ...entry, observations } : entry
    )
  };
};

const syncSelectionsFromCatalog = (items) => {
  const byId = new Map(items.map((item) => [item.item_uuid, item]));
  reportState = {
    ...reportState,
    selections: reportState.selections.map((entry) => {
      const catalogItem = byId.get(entry.item_uuid);
      if (!catalogItem) return entry;
      return {
        ...entry,
        title: catalogItem.title,
        instruction: catalogItem.instruction,
        instruction_uuid: catalogItem.instruction_uuid,
        work_line: catalogItem.work_line,
        work_line_uuid: catalogItem.work_line_uuid,
        work_line_code: catalogItem.work_line_code,
        work_line_sort_order: catalogItem.work_line_sort_order
      };
    })
  };
};

const exportDraft = () => JSON.stringify(getReportState(), null, 2);

const importDraft = (payload) => {
  if (!payload || typeof payload !== "object") {
    throw new Error("Formato de borrador inválido");
  }
  reportState = {
    header: {
      entity: payload.header?.entity || "",
      manager: payload.header?.manager || "",
      logo: payload.header?.logo?.trim() ? payload.header.logo : "Gestiona"
    },
    selections: Array.isArray(payload.selections)
      ? payload.selections.map((entry) => ({
          item_uuid: entry.item_uuid,
          item_code: entry.item_code || "",
          title: entry.title || "",
          instruction: entry.instruction || "",
          instruction_uuid: entry.instruction_uuid || "",
          work_line: entry.work_line || "",
          work_line_uuid: entry.work_line_uuid || "",
          work_line_code: entry.work_line_code || "",
          work_line_sort_order: Number.isFinite(entry.work_line_sort_order)
            ? entry.work_line_sort_order
            : null,
          plazo: entry.plazo || "",
          observations: entry.observations || ""
        }))
      : []
  };
};

const plazoOptions = [
  "Primer trimestre",
  "Segundo trimestre",
  "Tercer trimestre",
  "Cuarto trimestre",
  "Pendiente de fecha"
];

app.state = {
  getReportState,
  getLanguage,
  setLanguage,
  setHeader,
  resetReport,
  addSelection,
  removeSelection,
  setPlazo,
  setObservations,
  syncSelectionsFromCatalog,
  exportDraft,
  importDraft,
  plazoOptions
};
})();
