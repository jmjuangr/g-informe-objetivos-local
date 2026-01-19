const defaultState = () => ({
  header: {
    entity: "",
    manager: ""
  },
  selections: []
});

let reportState = defaultState();

export const getReportState = () => structuredClone(reportState);

export const setHeader = (payload) => {
  reportState = {
    ...reportState,
    header: {
      ...reportState.header,
      ...payload
    }
  };
};

export const resetReport = () => {
  reportState = defaultState();
};

export const addSelection = (item) => {
  if (reportState.selections.some((entry) => entry.item_uuid === item.item_uuid)) {
    return;
  }
  reportState = {
    ...reportState,
    selections: [...reportState.selections, { ...item, plazo: "", observations: "" }]
  };
};

export const removeSelection = (itemUuid) => {
  reportState = {
    ...reportState,
    selections: reportState.selections.filter((entry) => entry.item_uuid !== itemUuid)
  };
};

export const setPlazo = (itemUuid, plazo) => {
  reportState = {
    ...reportState,
    selections: reportState.selections.map((entry) =>
      entry.item_uuid === itemUuid ? { ...entry, plazo } : entry
    )
  };
};

export const setObservations = (itemUuid, observations) => {
  reportState = {
    ...reportState,
    selections: reportState.selections.map((entry) =>
      entry.item_uuid === itemUuid ? { ...entry, observations } : entry
    )
  };
};

export const exportDraft = () => JSON.stringify(getReportState(), null, 2);

export const importDraft = (payload) => {
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
          plazo: entry.plazo || "",
          observations: entry.observations || ""
        }))
      : []
  };
};

export const plazoOptions = [
  "Primer trimestre",
  "Segundo trimestre",
  "Tercer trimestre",
  "Cuarto trimestre",
  "Año completo"
];
