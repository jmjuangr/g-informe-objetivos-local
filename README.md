# Informe de Objetivos 2026 (modo offline)

Aplicación web 100% offline. Se ejecuta abriendo `index.html` desde un `.zip` descomprimido, sin servidores ni conexiones a Internet.
El repositorio solo contiene archivos estáticos (HTML/CSS/JS) y no requiere Node.js ni dependencias externas para ejecutarse; se han eliminado los artefactos legacy de Next.js/Supabase.

## Uso

1. Descarga el `.zip` del proyecto y descomprímelo.
2. Abre `index.html` con doble click (modo `file://`).
3. Usa el generador público para seleccionar ítems, indicar plazos y exportar el PDF.

## Persistencia local

El catálogo se guarda en `localStorage` bajo la clave `catalog_db_v1` (schema_version 2); el estado en ejecución vive en memoria y los borradores del informe se gestionan mediante exportación/importación JSON. Las traducciones se sincronizan automáticamente al abrir la app cuando cambia `seed_version`. En concreto, si cambia `seed_version` se sobrescriben automáticamente `items_objetivo.title` y `items_objetivo.title_i18n` con los valores del seed.

Para reiniciar el catálogo:

1. Abre las herramientas del navegador.
2. Borra la clave `catalog_db_v1` en el almacenamiento local.
3. Recarga `index.html`.

La migración de schema_version 1 a 2 añade traducciones (`*_i18n`) desde los datos seed cuando estén disponibles.
Los vendors locales han sido ajustados para evitar ejecución dinámica (`eval`/`Function`), manteniendo el funcionamiento 100% offline.

## Borradores JSON

- **Exportar:** descarga un archivo JSON con el estado del informe (cabecera + selección + plazos).
- **Importar:** carga un JSON exportado previamente para continuar el trabajo.

## PDF

El PDF se genera 100% en el navegador usando una librería local (sin dependencias remotas), agrupado por instrucción y línea de trabajo.

## Word (.docx)

La exportación a Word se genera 100% en el navegador usando librerías locales, en formato apaisado y con el mismo contenido que el PDF.

## Estructura principal

```
index.html
assets/
  css/styles.css
  js/
  vendor/
```
