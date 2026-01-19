
---

# AGENTS.md — Project Instructions for Codex (Modo Local Offline)

## 0) Regla de oro
Antes de escribir código:
1) Lee `PRD.md` (root) para entender QUÉ hay que construir.
2) Si algo no está definido en el PRD, asume lo mínimo posible y documenta en `/docs/assumptions.md`.

## 1) Contexto del proyecto (qué es)
Aplicación web 100% **offline** que se ejecuta abriendo `index.html` desde un `.zip` descomprimido.
- Admin (login local): CRUD del catálogo jerárquico normalizado.
- Público: selección de ítems + metadatos + generación de PDF (client-side).
- Persistencia: “BBDD local” en `localStorage` (JSON versionado).

## 2) Tech stack (obligatorio)
### 2.1 Runtime (end-user)
- **Solo HTML/CSS/JS** ejecutable directamente en navegador.
- Prohibido depender de:
  - Next.js, Vercel, Supabase, servidores, API remota
  - CDNs (todo debe ir dentro del zip)

### 2.2 Librerías permitidas (solo si se incluyen localmente en el repo)
- PDF: `pdf-lib` o `jsPDF` (archivo vendor local en `/assets/vendor/`).
- Opcional: librería mínima de “toast”, pero incluida localmente (o implementar una propia simple).

> Preferencia: mantener dependencias al mínimo. Si una librería se usa, debe estar versionada y copiada dentro del repositorio para funcionamiento offline.

## 3) Fuentes de verdad
- `PRD.md` (root): especificación canónica.
- `/docs/assumptions.md`: supuestos mínimos si el PRD no define algo.

## 4) No negociables (muy importante)
1) **Ejecución offline**:
   - Debe funcionar abriendo `index.html` desde disco (file://) tras descomprimir un zip.
2) **Sin backend / sin red**:
   - Prohibidas llamadas a Supabase, APIs o endpoints remotos.
3) **Persistencia local**:
   - El catálogo se guarda en localStorage como JSON versionado.
4) **NO persistencia de informes en “BBDD”**:
   - El informe (selección + plazo + cabecera) se maneja como estado del cliente y se exporta/importa como JSON.
5) **PDF siempre client-side**:
   - Prohibido crear rutas server para PDF.
6) **Esquema normalizado**:
   - Mantener las entidades: commissions, instructions, matters, submatters, work_lines, items_objetivo.
7) **Año fijo**:
   - year = 2026 en `items_objetivo`, no editable.

## 5) Estructura de carpetas (objetivo)
- `/index.html` (entrada única)
- `/assets/css/styles.css`
- `/assets/js/`
  - `app.js` (bootstrap + router hash/simple)
  - `state.js` (estado del informe: cabecera, seleccionados, plazo)
  - `db.js` (capa de persistencia localStorage versionada)
  - `catalog.js` (consultas tipo “v_items_export” en memoria)
  - `public.js` (UI y lógica del generador)
  - `pdf.js` (generación PDF)
  - `seed.js` (datos iniciales opcionales como constante JS)
- `/assets/vendor/` (si aplica)
- `/docs/assumptions.md` (si se generan supuestos)
- `/README.md` (cómo usar: abrir index.html, y cómo resetear datos)

## 6) Reglas de implementación (seguir estrictamente)

### 6.1 Persistencia (db.js)
- Guardar/leer desde localStorage:
  - Key: `catalog_db_v1`
- Debe existir:
  - `loadDb()` -> devuelve objeto DB válido (si no existe, crea DB vacía o desde seed)
  - `saveDb(db)` -> persiste y actualiza `updated_at`
  - Funciones CRUD por entidad (create/update/delete/get/list)
- Versionado:
  - `schema_version` obligatorio
  - Si cambia, implementar migración simple y documentar en README.

### 6.2 “Vista” plana equivalente a v_items_export (catalog.js)
- Implementar `getItemsExport()` que devuelva una lista plana con los campos del PRD.
- Las pantallas públicas deben consumir ESTA vista para listados/filtros.


### 6.3 UI pública (public.js)
- Implementar:
  - Inputs cabecera (Entidad, Gestor)
  - Selector cascada (Instrucción -> Línea -> Ítems)
  - Añadir/Quitar sin duplicados
  - Plazo obligatorio por ítem seleccionado
  - Exportar borrador JSON
  - Importar borrador JSON

### 6.4 PDF (pdf.js)
- 100% client-side usando librería local (vendor).
- El PDF:
  - Agrupa por Instrucción (y opcionalmente por Línea de trabajo).
  - Incluye cabecera (Entidad, Gestor)
  - Incluye por cada ítem: título + código + plazo + observaciones (si existe)

### 6.5 Navegación
- Implementar hash routing simple:
  - `#/` -> pública

## 7) Flujo de trabajo recomendado (orden)
1) Skeleton de UI (index + secciones + router)
2) db.js (persistencia + seed)
3) catalog.js (vista plana + consultas)
4) UI pública completa (selección + borradores)
5) PDF export
6) Pulido UX (mensajes, validaciones, estados vacíos)
7) README + assumptions

## 8) Definition of Done (por tarea)
Una tarea está hecha solo si:
- Cumple el PRD.
- Funciona abriendo `index.html` desde disco (sin servidor).
- No depende de Internet.
- No existen endpoints backend.
- Documentación actualizada si se introducen supuestos o cambios.
