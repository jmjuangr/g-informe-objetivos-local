# PRODUCT REQUIREMENTS DOCUMENT (PRD) — Modo Local Offline (index.html)

## 0. Objetivo y restricción clave
Esta aplicación DEBE poder ejecutarse **sin instalación** y **sin servidor**:
- El usuario descarga un `.zip`, lo descomprime y abre `index.html` (doble click).
- Debe funcionar **offline** (sin conexión a Internet).
- No existe BBDD remota: toda la persistencia es local en el equipo del usuario.

> Nota: en modo 100% client-side, “login admin” NO puede considerarse seguridad real frente a un atacante con acceso al equipo.
> Se usa como “bloqueo de interfaz” para separar funciones y evitar cambios accidentales.

---

## 1. Visión general del producto
Aplicación web para la **gestión y generación de informes estandarizados en PDF**:

- **Usuarios Anónimos (público)**: seleccionan ítems + introducen metadatos (Entidad, Gestor, Plazo por ítem) y generan un **PDF**.

La generación del PDF es **100% client-side** (prohibido cualquier backend).

---

## 2. Roles de usuario


### A) Usuario general (Público/Anónimo)
- Acceso sin autenticación.
- Permisos:
  - Leer el catálogo configurado (desde almacenamiento local).
  - Filtrar ítems por jerarquía y seleccionar ítems objetivo.
  - Definir **plazo por ítem**.
  - Exportar e importar borradores del informe en JSON.
  - Generar y descargar el PDF.

---

## 3. Funcionalidades (MVP)

### 3.1 Panel de Administración (zona “protegida” local)
- Gestión del catálogo normalizado:
  - Comisiones
  - Instrucciones
  - Materias
  - Submaterias
  - Líneas de trabajo
  - Ítems objetivo
- Formularios con validación:
  - Campos requeridos.
  - Año fijo: **2026** en `items_objetivo`.
- Tabla de gestión:
  - Listado, edición y borrado.
  - Búsqueda simple (por texto).
  - Ordenación mínima (por instrucción / línea / código).

### 3.2 Generador público de informes
- Cabecera:
  - Entidad (texto)
  - Gestor (texto)

- Selector de ítems (cascada):
  - Selección en cascada:
    1) Instrucción
    2) Línea de trabajo (derivada de la instrucción)
    3) Ítems objetivo (derivados de la línea)
  - Lista de disponibles con botón “Añadir”.
  - Al añadir, el ítem desaparece de disponibles para evitar duplicados.
  - Lista/tabla de seleccionados con botón “Quitar”.
  - Cada ítem seleccionado exige “Plazo”:
    - Primer trimestre, Segundo trimestre, Tercer trimestre, Cuarto trimestre, Año completo.

- Borradores locales (client-side):
  - Exportar el estado del informe a JSON (archivo descargable).
  - Importar un borrador JSON (file picker) para continuar.

- Exportación PDF (client-side):
  - Generación y descarga local del PDF.
  - Mantener agrupación por Instrucción (y dentro, por Línea de trabajo si aplica).
  - Incluir Observaciones (si existe campo en UI) y el Plazo por ítem.

---

## 4. Persistencia local (la “BBDD local”)

### 4.1 Estrategia elegida (recomendada para index.html sin servidor)
Usar **localStorage** como almacenamiento persistente, guardando un único documento JSON versionado:
- Es lo más compatible con ejecución `file://` (doble click).
- Evita dependencias de APIs con restricciones por “secure context”.

> Si en el futuro el catálogo crece mucho, se puede migrar a IndexedDB, pero NO es necesario para el MVP.

### 4.2 Formato del “documento DB”
Clave localStorage: `catalog_db_v1`

Estructura:
```json
{
  "schema_version": 1,
  "updated_at": "ISO_DATE",
  "commissions": [{ "id": "uuid", "name": "..." }],
  "instructions": [{ "id": "uuid", "commission_id": "uuid", "name": "...", "legacy_instruction_id": null }],
  "matters": [{ "id": "uuid", "instruction_id": "uuid", "name": "..." }],
  "submatters": [{ "id": "uuid", "matter_id": "uuid", "name": "..." }],
  "work_lines": [{ "id": "uuid", "code": "...", "display_name": "...", "sort_order": 10 }],
  "items_objetivo": [{
    "id": "uuid",
    "instruction_id": "uuid",
    "submatter_id": "uuid",
    "work_line_id": "uuid",
    "title": "...",
    "status": "...",
    "year": 2026,
    "legacy_item_code": null
  }]
}

## Reglas

- **IDs:** `crypto.randomUUID()`.
- **`year`** en `items_objetivo`: **SIEMPRE 2026** (no editable).
- **`plazo`**: **NO se guarda** en la “BBDD”; solo en el **borrador del informe**.

---

## 4.3 Vista plana equivalente a `v_items_export`

No existe una VIEW SQL, pero la aplicación debe construir una “vista” en memoria para UI/PDF.

**Columnas mínimas:**
- `item_uuid`, `item_code` ( `legacy_item_code` o id corto), `title`, `status`, `year`
- `instruction_uuid`, `instruction`, `commission`
- `matter`, `submatter`
- `work_line_uuid`, `work_line_code`, `work_line`

---



## 5. Navegación / “Rutas”

Como no hay servidor ni Next.js, se define navegación por:
- **Hash routing (recomendado):** `index.html#/`, `index.html#/login`, `index.html#/admin`
- **Alternativa válida:** una sola página con secciones y estado.

**Vistas requeridas:**
- Pública: Generador de informes
- Login admin
- Admin dashboard (CRUD)

---

## 6. UI/UX

- Interfaz clara y simple (no dependiente de CDNs).
- Feedback: mensajes inline o “toasts” implementados sin librerías externas (o librería incluida localmente).
- Acciones típicas: Añadir / Quitar / Guardar / Exportar JSON / Importar JSON / Exportar PDF.

---

## 7. Criterios de aceptación (Definition of Done)

Se considera entregado si:

### Ejecución
- Descargar zip, descomprimir, abrir `index.html` y funciona.
- Funciona sin Internet.

### Persistencia local
- Crear/editar catálogo en admin, cerrar pestaña, volver a abrir `index.html` y los datos siguen.

### Generador
- Selección en cascada funciona.
- No duplica ítems.
- Plazo requerido por ítem.

### Export/Import JSON
- Exporta e importa borradores del informe.

### PDF
- Se genera 100% client-side.
- Respeta el orden/agrupación indicada.

### No backend
- No existe API server, ni Supabase, ni llamadas remotas.
