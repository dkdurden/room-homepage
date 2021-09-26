import { data } from "./data.js";
import { renderPage } from "./renderPage.js";

export class Pages {
  pages;
  index;
  container;

  constructor(containerSelector) {
    this.pages = data;
    this.index = 0;
    this.container = document.querySelector(containerSelector);

    renderPage(this.pages[this.index], this.container);
  }

  nextPage() {
    if (this.index === this.pages.length - 1) this.index = 0;
    else this.index++;

    renderPage(this.pages[this.index], this.container);
  }

  prevPage() {
    if (this.index === 0) this.index = this.pages.length - 1;
    else this.index--;

    renderPage(this.pages[this.index], this.container);
  }
}
