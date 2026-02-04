(function () {
  window.App = window.App || {};

  const logoSources = {
    Gestiona: "assets/img/Gestiona-RGB.png",
    Ecityclic: "assets/img/ecityclic-espublico-RGB.png"
  };

  const logoCache = new Map();

  const base64ToBytes = (base64) => {
    const binary = atob(base64);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  };

  const blobToBase64 = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = String(reader.result || "");
        const splitIndex = result.indexOf(",");
        resolve(splitIndex >= 0 ? result.slice(splitIndex + 1) : "");
      };
      reader.onerror = () => reject(reader.error || new Error("No se pudo leer el logo."));
      reader.readAsDataURL(blob);
    });

  const loadLogoBase64 = async (key) => {
    if (!key || !logoSources[key]) return "";
    if (logoCache.has(key)) return logoCache.get(key);
    const response = await fetch(logoSources[key]);
    if (!response.ok) {
      throw new Error(`No se pudo cargar el logo ${key}.`);
    }
    const blob = await response.blob();
    const base64 = await blobToBase64(blob);
    logoCache.set(key, base64);
    return base64;
  };

  const getLogoBytes = async (key) => {
    if (!key) return null;
    const base64 = await loadLogoBase64(key);
    if (!base64) return null;
    return base64ToBytes(base64);
  };

  window.App.logo = {
    getLogoBytes
  };
})();
