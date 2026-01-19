export const seedData = {
  schema_version: 1,
  updated_at: new Date().toISOString(),
  commissions: [
    { id: "c1", name: "Comisión General" }
  ],
  instructions: [
    { id: "i1", commission_id: "c1", name: "Instrucción 01/2026", legacy_instruction_id: null }
  ],
  matters: [
    { id: "m1", instruction_id: "i1", name: "Materia principal" }
  ],
  submatters: [
    { id: "s1", matter_id: "m1", name: "Submateria base" }
  ],
  work_lines: [
    { id: "w1", code: "L1", display_name: "Línea estratégica", sort_order: 1 }
  ],
  items_objetivo: [
    {
      id: "o1",
      instruction_id: "i1",
      submatter_id: "s1",
      work_line_id: "w1",
      title: "Definir plan anual de seguimiento",
      status: "Activo",
      year: 2026,
      legacy_item_code: "OBJ-001"
    }
  ]
};
