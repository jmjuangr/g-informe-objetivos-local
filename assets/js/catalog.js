const app = window.App || (window.App = {});
const { dbApi } = app;

const shortId = (id) => id?.slice(0, 8) || "";

const getItemsExport = () => {
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
      title: item.title,
      status: item.status,
      year: item.year,
      instruction_uuid: instruction?.id || "",
      instruction: instruction?.name || "",
      commission: commission?.name || "",
      matter: matter?.name || "",
      submatter: submatter?.name || "",
      work_line_uuid: workLine?.id || "",
      work_line_code: workLine?.code || "",
      work_line: workLine?.display_name || ""
    };
  });
};

const getInstructions = () =>
  dbApi
    .instructions
    .list()
    .map((instruction) => ({
      ...instruction,
      commission: dbApi.commissions.get(instruction.commission_id)?.name || ""
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

const getWorkLines = () =>
  dbApi
    .work_lines
    .list()
    .slice()
    .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));

app.catalog = {
  getItemsExport,
  getInstructions,
  getWorkLines
};
