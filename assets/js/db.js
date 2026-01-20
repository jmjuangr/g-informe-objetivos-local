(function () {
  var app = window.App || (window.App = {});
  const seedData = app.seedData;

const STORAGE_KEY = "catalog_db_v1";
const SCHEMA_VERSION = 2;
const SEED_VERSION = seedData?.seed_version ?? null;

const entityKeys = [
  "commissions",
  "instructions",
  "matters",
  "submatters",
  "work_lines",
  "items_objetivo"
];

const emptyDb = () => ({
  schema_version: SCHEMA_VERSION,
  seed_version: SEED_VERSION,
  updated_at: new Date().toISOString(),
  commissions: [],
  instructions: [],
  matters: [],
  submatters: [],
  work_lines: [],
  items_objetivo: []
});

const loadDb = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const seeded = seedData ? structuredClone(seedData) : emptyDb();
    saveDb(seeded);
    return seeded;
  }

  try {
    const parsed = JSON.parse(raw);
    if (parsed.schema_version !== SCHEMA_VERSION) {
      const migrated = migrateDb(parsed);
      saveDb(migrated);
      return migrated;
    }
    const normalized = normalizeDb(parsed);
    const needsSeedUpdate = SEED_VERSION !== normalized.seed_version;
    const enriched = applyI18nFromSeed(normalized);
    if (needsSeedUpdate || enriched.changed) {
      const updated = {
        ...enriched.db,
        seed_version: SEED_VERSION
      };
      saveDb(updated);
      return updated;
    }
    return normalized;
  } catch (error) {
    const fresh = seedData ? structuredClone(seedData) : emptyDb();
    saveDb(fresh);
    return fresh;
  }
};

const saveDb = (db) => {
  const payload = {
    ...db,
    schema_version: SCHEMA_VERSION,
    updated_at: new Date().toISOString()
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
};

const normalizeDb = (db) => {
  const normalized = { ...emptyDb(), ...db };
  entityKeys.forEach((key) => {
    normalized[key] = Array.isArray(normalized[key]) ? normalized[key] : [];
  });
  return normalized;
};

const applyI18nFromSeed = (db) => {
  if (!seedData) {
    return { db, changed: false };
  }

  let changed = false;
  const seedInstructions = new Map((seedData.instructions || []).map((item) => [item.id, item]));
  const seedWorkLines = new Map((seedData.work_lines || []).map((item) => [item.id, item]));
  const seedItems = new Map((seedData.items_objetivo || []).map((item) => [item.id, item]));

  const mergeI18n = (list, seedMap, field) =>
    list.map((item) => {
      const seed = seedMap.get(item.id);
      const seedI18n = seed?.[field];
      if (!seedI18n) return item;
      if (item[field] && typeof item[field] === "object") {
        const merged = { ...seedI18n, ...item[field] };
        const hasDiff = JSON.stringify(merged) !== JSON.stringify(item[field]);
        if (hasDiff) {
          changed = true;
          return { ...item, [field]: merged };
        }
        return item;
      }
      changed = true;
      return { ...item, [field]: { ...seedI18n } };
    });

  const instructions = mergeI18n(db.instructions, seedInstructions, "name_i18n");
  const work_lines = mergeI18n(db.work_lines, seedWorkLines, "display_name_i18n");
  const items_objetivo = mergeI18n(db.items_objetivo, seedItems, "title_i18n");

  if (!changed) {
    return { db, changed: false };
  }

  return {
    db: {
      ...db,
      instructions,
      work_lines,
      items_objetivo
    },
    changed: true
  };
};

const migrateDb = (db) => {
  const normalized = normalizeDb({ ...emptyDb(), ...db, schema_version: SCHEMA_VERSION });
  return {
    ...applyI18nFromSeed(normalized).db,
    seed_version: SEED_VERSION
  };
};

const updateEntity = (key, item) => {
  const db = loadDb();
  db[key] = db[key].map((entry) => (entry.id === item.id ? item : entry));
  saveDb(db);
  return item;
};

const createEntity = (key, item) => {
  const db = loadDb();
  const record = { ...item, id: crypto.randomUUID() };
  db[key] = [...db[key], record];
  saveDb(db);
  return record;
};

const deleteEntity = (key, id) => {
  const db = loadDb();
  db[key] = db[key].filter((entry) => entry.id !== id);
  saveDb(db);
};

const getEntity = (key, id) => loadDb()[key].find((entry) => entry.id === id) || null;

const listEntity = (key) => loadDb()[key];

const dbApi = {
  loadDb,
  saveDb,
  commissions: {
    list: () => listEntity("commissions"),
    get: (id) => getEntity("commissions", id),
    create: (payload) => createEntity("commissions", payload),
    update: (payload) => updateEntity("commissions", payload),
    remove: (id) => deleteEntity("commissions", id)
  },
  instructions: {
    list: () => listEntity("instructions"),
    get: (id) => getEntity("instructions", id),
    create: (payload) => createEntity("instructions", payload),
    update: (payload) => updateEntity("instructions", payload),
    remove: (id) => deleteEntity("instructions", id)
  },
  matters: {
    list: () => listEntity("matters"),
    get: (id) => getEntity("matters", id),
    create: (payload) => createEntity("matters", payload),
    update: (payload) => updateEntity("matters", payload),
    remove: (id) => deleteEntity("matters", id)
  },
  submatters: {
    list: () => listEntity("submatters"),
    get: (id) => getEntity("submatters", id),
    create: (payload) => createEntity("submatters", payload),
    update: (payload) => updateEntity("submatters", payload),
    remove: (id) => deleteEntity("submatters", id)
  },
  work_lines: {
    list: () => listEntity("work_lines"),
    get: (id) => getEntity("work_lines", id),
    create: (payload) => createEntity("work_lines", payload),
    update: (payload) => updateEntity("work_lines", payload),
    remove: (id) => deleteEntity("work_lines", id)
  },
  items_objetivo: {
    list: () => listEntity("items_objetivo"),
    get: (id) => getEntity("items_objetivo", id),
    create: (payload) => createEntity("items_objetivo", payload),
    update: (payload) => updateEntity("items_objetivo", payload),
    remove: (id) => deleteEntity("items_objetivo", id)
  }
};

  app.loadDb = loadDb;
  app.saveDb = saveDb;
  app.dbApi = dbApi;
})();
