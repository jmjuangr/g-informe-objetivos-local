# Assumptions

- El acceso admin usa una contraseña local fija (`admin`) almacenada solo en memoria de sesión; se considera un bloqueo de interfaz, no seguridad real.
- Se incluye un shim local compatible con una porción mínima de `pdf-lib` para generar PDFs sin dependencias externas, dado que el entorno debe funcionar offline.
