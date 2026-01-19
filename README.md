# Informe de Objetivos 2026 (modo offline)

Aplicación web 100% offline. Se ejecuta abriendo `index.html` desde un `.zip` descomprimido, sin servidores ni conexiones a Internet.
El repositorio solo contiene archivos estáticos (HTML/CSS/JS) y no requiere Node.js ni dependencias externas para ejecutarse; se han eliminado los artefactos legacy de Next.js/Supabase.

## Uso

1. Descarga el `.zip` del proyecto y descomprímelo.
2. Abre `index.html` con doble click (modo `file://`).
3. Usa el generador público para seleccionar ítems, indicar plazos y exportar el PDF.
4. Accede a `#/login` para editar el catálogo (contraseña local por defecto: `admin`).

## Persistencia local

El catálogo se guarda en `localStorage` bajo la clave `catalog_db_v1`. Para reiniciar el catálogo:

1. Abre las herramientas del navegador.
2. Borra la clave `catalog_db_v1` en el almacenamiento local.
3. Recarga `index.html`.

## Borradores JSON

- **Exportar:** descarga un archivo JSON con el estado del informe (cabecera + selección + plazos).
- **Importar:** carga un JSON exportado previamente para continuar el trabajo.

## PDF

El PDF se genera 100% en el navegador usando una librería local (sin dependencias remotas), agrupado por instrucción y línea de trabajo.

## Estructura principal

```
index.html
assets/
  css/styles.css
  js/
  vendor/
```
