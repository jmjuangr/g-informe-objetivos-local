# Assumptions

- Se incluye un shim local compatible con una porción mínima de `pdf-lib` para generar PDFs sin dependencias externas, dado que el entorno debe funcionar offline.
- El seed inicial se genera desde `MASTER_OBJETIVOS_BORRADOR 2026 (1).xlsx` usando `LISTADO UNIFICADO`: comisión/instrucción/materia/submateria se toman por nombre; `ID_INSTRUCCIÓN` se guarda como `legacy_instruction_id` y `ID_ITEM` como `legacy_item_code` (si falta, se deja `null`).
- La línea de trabajo se toma de `LÍNEA DE TRABAJO` con `ID_LINEA TRABAJO` como `code`/`sort_order`; si falta el ID, se rellena por coincidencia de nombre en otras filas.
- El título del ítem se toma de `ITEM/OBJETIVO DE EVALUACIÓN2` (fallback a `ITEM/OBJETIVO DE EVALUACIÓN`), limpiando espacios extra.
- La app soporta campos `*_i18n` (por ejemplo `name_i18n`, `display_name_i18n`, `title_i18n`) con traducciones opcionales; si un idioma no está definido, se usa el texto en castellano.
