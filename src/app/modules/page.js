
export class Page {
  constructor() {
    this.element = null;
  }

  appendToElement(el) {
    this.createElement();
    el.append(this.element);
  }

  createElement() {
    let s = this.getElementString();
    this.element = $(s);
  }

  getElementString() {
    throw "Please override function";
  }
  removeElement(el) {
    el.remove(this.element)
  }
}
