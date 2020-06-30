
/**
 * createElement
 * function createElement
 * @param {string} type - Tell the type of this HTMLElement (empty by default)
 * @param {string} classes - Tell the classes to this HTMLElement (empty by default)
 * @param {string} html - Insert an InnerHTML (empty by default)
 * @param {Object} attribute - Receive an object where the keys are attribures to insert in this HTMLElement
 * @param {Object} listener - Receive an object where the keys are listeners to insert in this HTMLElement
 * @param {Array} children - Receive an array of HTMLElements to insert in this HTMLElement
 * @return {HTMLElement} - Return the element defined
 *
 * @example
 * createElement({type:'img', classes: 'img-large img-borded', html: '', attributes: [{src: './img/profile.png'}, {title: "image's title"}], listeners: [{click: "showModal()"}]});
 */

const createElement = ({ type = 'div', classes = '', html = '', attributes = {}, listeners = {}, children = [] }): HTMLElement =>
  new __Nova(type, classes, html, attributes, listeners, children).getElement();

class __Nova {
  private type: string = 'div';
  private classes: string | Array<string> = '';
  private html: string = '';
  private attributes: { [key: string]: any } = {};
  private listeners: { [key: string]: any } = {};
  private children: Array<HTMLElement> = [];

  constructor(type: string, classes: string | Array<string>, html: string, attributes: Object, listeners: Object, children: Array<HTMLElement>) {
    if (type.length > 1) this.type = type;
    if (Array.isArray(classes) && classes.length > 0) {
      this.classes = classes;
    } else if (classes.length > 0) {
      this.classes = classes;
    }
    if (html.length > 0) this.html = html;
    if (Object.keys(attributes).length > 0) this.attributes = attributes;
    if (Object.keys(listeners).length > 0) this.listeners = listeners;
    if (children.length > 0) this.children = children;
  }

  getElement(): HTMLElement {
    const element = document.createElement(this.type);
    if (this.classes.length > 0) {
      if (Array.isArray(this.classes)) {
        element.classList.add(...this.classes);
      } else {
        element.className = this.classes;
      }
    }

    if (this.html.length > 0) {
      element.innerHTML = this.html;
    }

    for (const attribute in this.attributes) {
      element.setAttribute(attribute, this.attributes[attribute]);
    }

    for (const listener in this.listeners) {
      element.addEventListener(listener, this.listeners[listener]);
    }

    for (const child of this.children) {
      element.appendChild(child);
    }

    return element;
  }
}