(function () {
var app = window.App || (window.App = {});
const { dbApi } = app;

const shortId = (id) => id?.slice(0, 8) || "";

const resolveI18n = (fallback, i18n, language) => {
  if (!language || !i18n || typeof i18n !== "object") {
    return fallback;
  }
  return i18n[language] || i18n.es || fallback;
};

const getItemsExport = (language) => {
  const db = dbApi.loadDb();
  return db.items_objetivo.map((item) => {
    const instruction = db.instructions.find((entry) => entry.id === item.instruction_id);
    const commission = db.commissions.find((entry) => entry.id === instruction?.commission_id);
    const submatter = db.submatters.find((entry) => entry.id === item.submatter_id);
    const matter = db.matters.find((entry) => entry.id === submatter?.matter_id);
    const workLine = db.work_lines.find((entry) => entry.id === item.work_line_id);

    return {
      item_uuid: item.id,
      item_code: item.legacy_item_code || shortId(item.id),
      title: resolveI18n(item.title, item.title_i18n, language),
      status: item.status,
      year: item.year,
      instruction_uuid: instruction?.id || "",
      instruction: resolveI18n(instruction?.name || "", instruction?.name_i18n, language),
      commission: resolveI18n(commission?.name || "", commission?.name_i18n, language),
      matter: resolveI18n(matter?.name || "", matter?.name_i18n, language),
      submatter: resolveI18n(submatter?.name || "", submatter?.name_i18n, language),
      work_line_uuid: workLine?.id || "",
      work_line_code: workLine?.code || "",
      work_line: resolveI18n(workLine?.display_name || "", workLine?.display_name_i18n, language),
      work_line_sort_order: workLine?.sort_order ?? null
    };
  });
};

const getInstructions = (language) =>
  dbApi
    .instructions
    .list()
    .map((instruction) => {
      const commission = dbApi.commissions.get(instruction.commission_id);
      return {
        ...instruction,
        name: resolveI18n(instruction.name, instruction.name_i18n, language),
        commission: resolveI18n(commission?.name || "", commission?.name_i18n, language)
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

const getWorkLines = (language) =>
  dbApi
    .work_lines
    .list()
    .slice()
    .map((workLine) => ({
      ...workLine,
      display_name: resolveI18n(workLine.display_name, workLine.display_name_i18n, language)
    }))
    .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));

app.catalog = {
  getItemsExport,
  getInstructions,
  getWorkLines
};
})();
