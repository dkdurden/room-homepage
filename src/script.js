import { Pages } from "./Pages.js";

window.addEventListener("DOMContentLoaded", (event) => {
  init();
});

function init() {
  const selectors = {
    nextPageBtn: "#next",
    prevPageBtn: "#prev",
    contentContainer: "#container",
    collapse: ".collapse",
  };

  const pages = new Pages(selectors.contentContainer);

  // next/prev buttons are dynamic, so event delegation is needed
  document.body.addEventListener("click", (e) => {
    if (e.target.id === "next" || e.target.parentElement.id === "next")
      pages.nextPage();
    else if (e.target.id === "prev" || e.target.parentElement.id === "prev")
      pages.prevPage();

    if (
      e.target.classList.contains("toggle") ||
      e.target.parentElement.classList.contains("toggle")
    )
      document.querySelector(selectors.collapse).style.display = "flex";

    if (
      e.target.classList.contains("collapse__close") ||
      e.target.parentElement.classList.contains("collapse__close")
    ) {
      document.querySelector(selectors.collapse).style.display = "none";
    }
  });
}
