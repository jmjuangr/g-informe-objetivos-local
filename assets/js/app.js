import { initPublic } from "./public.js";
import { initAdmin } from "./admin.js";

const ADMIN_PASSWORD = "admin";
const AUTH_KEY = "admin_authed";

const toastEl = document.querySelector("#toast");

export const showToast = (message) => {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 2500);
};

const isAuthed = () => sessionStorage.getItem(AUTH_KEY) === "true";

const setAuthed = (value) => {
  sessionStorage.setItem(AUTH_KEY, value ? "true" : "false");
};

const viewMap = {
  "#/": document.querySelector("#view-public"),
  "#/login": document.querySelector("#view-login"),
  "#/admin": document.querySelector("#view-admin")
};

const showView = (hash) => {
  Object.values(viewMap).forEach((view) => view.classList.remove("active"));
  const target = viewMap[hash] || viewMap["#/"];
  target.classList.add("active");
};

const publicUI = initPublic({ showToast });
const adminUI = initAdmin({
  showToast,
  onCatalogUpdated: () => publicUI.refresh()
});

const handleRoute = () => {
  const hash = window.location.hash || "#/";
  if (hash === "#/admin" && !isAuthed()) {
    window.location.hash = "#/login";
    showToast("Necesitas iniciar sesión.");
    return;
  }
  showView(hash);
};

const loginButton = document.querySelector("#admin-login");
const passwordInput = document.querySelector("#admin-password");
const logoutButton = document.querySelector("#admin-logout");

loginButton.addEventListener("click", () => {
  if (passwordInput.value === ADMIN_PASSWORD) {
    setAuthed(true);
    passwordInput.value = "";
    window.location.hash = "#/admin";
    showToast("Acceso concedido.");
  } else {
    showToast("Contraseña incorrecta.");
  }
});

logoutButton.addEventListener("click", () => {
  setAuthed(false);
  window.location.hash = "#/";
  showToast("Sesión cerrada.");
});

window.addEventListener("hashchange", handleRoute);
handleRoute();

export const refreshCatalog = () => {
  adminUI.refresh();
  publicUI.refresh();
};
