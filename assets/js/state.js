(function () {
var app = window.App || (window.App = {});

const defaultState = () => ({
  header: {
    entity: "",
    manager: ""
  },
  selections: []
});

let reportState = defaultState();

const getReportState = () => structuredClone(reportState);

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
    selections: [...reportState.selections, { ...item, plazo: "", observations: "" }]
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

const exportDraft = () => JSON.stringify(getReportState(), null, 2);

const importDraft = (payload) => {
  if (!payload || typeof payload !== "object") {
    throw new Error("Formato de borrador inválido");
  }
  reportState = {
    header: {
      entity: payload.header?.entity || "",
      manager: payload.header?.manager || ""
    },
    selections: Array.isArray(payload.selections)
      ? payload.selections.map((entry) => ({
          item_uuid: entry.item_uuid,
          item_code: entry.item_code || "",
          title: entry.title || "",
          instruction: entry.instruction || "",
          work_line: entry.work_line || "",
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
  "Año completo"
];

app.state = {
  getReportState,
  setHeader,
  resetReport,
  addSelection,
  removeSelection,
  setPlazo,
  setObservations,
  exportDraft,
  importDraft,
  plazoOptions
};
})();
