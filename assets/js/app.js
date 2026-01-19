import { initPublic } from "./public.js";

const toastEl = document.querySelector("#toast");

export const showToast = (message) => {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 2500);
};

const viewMap = {
  "#/": document.querySelector("#view-public")
};

const showView = (hash) => {
  Object.values(viewMap).forEach((view) => view.classList.remove("active"));
  const target = viewMap[hash] || viewMap["#/"];
  target.classList.add("active");
};

const publicUI = initPublic({ showToast });

const handleRoute = () => {
  const hash = window.location.hash || "#/";
  showView(hash);
};

window.addEventListener("hashchange", handleRoute);
handleRoute();
