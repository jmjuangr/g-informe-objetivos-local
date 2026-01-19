# PROJECT_STATUS.md

## Multidioma: pasos siguientes

1) Rellenar traducciones reales en `assets/js/seed.js`.
   - Campos a añadir por entidad:
     - `commissions.name_i18n`
     - `instructions.name_i18n`
     - `matters.name_i18n`
     - `submatters.name_i18n`
     - `work_lines.display_name_i18n`
     - `items_objetivo.title_i18n`
   - Estructura sugerida:
     ```js
     {
       name_i18n: { es: "...", eu: "...", gl: "...", ca: "...", va: "..." }
     }
     ```
   - Si falta algún idioma, se mostrara el texto en castellano.

2) Ver los cambios del seed.
   - O borrar el `localStorage` del navegador.
   - O implementar un boton de "reset" que borre `catalog_db_v1` y recargue el seed.

## Nota: estado del cliente vs localStorage

- Estado del cliente: vive en memoria y se pierde al recargar la pagina.
- localStorage: persiste en el navegador y se mantiene al cerrar/abrir `index.html`.

