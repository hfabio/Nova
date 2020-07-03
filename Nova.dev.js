
/**
 * createElement
 * function createElement
 * @param {string} type - Tell the type of this HTMLElement (empty by default)
 * @param {string | Array<string>} classes - Tell the classes to this HTMLElement (empty by default)
 * @param {Object} style - Tell the styles to this HTMLElement (empty by default)
 * @param {string} html - Insert an InnerHTML (empty by default)
 * @param {Object} attribute - Receive an object where the keys are attribures to insert in this HTMLElement
 * @param {Object} listener - Receive an object where the keys are listeners to insert in this HTMLElement
 * @param {Array} children - Receive an array of HTMLElements to insert in this HTMLElement
 * @return {HTMLElement} - Return the element defined
 *
 * @example
 * createElement({type:'img', classes: 'img-large img-borded', html: '', attributes: [{src: './img/profile.png'}, {title: "image's title"}], listeners: [{click: "showModal()"}]});
 */

function createElement({ type = 'div', classes = '', style = {}, html = '', attributes = {}, listeners = {}, children = [] }) {
  let element = document.createElement(type);

  if (classes.length > 0) {
    if (Array.isArray(classes)) {
      element.classList.add(...classes);
    } else {
      element.className = classes;
    }
  }

  if (Object.keys(style).length > 0) {
    for (const key in style) {
      if (style.hasOwnProperty(key)) {
        element.style[key] = style[key];
      }
    }
  }

  if (html.length > 0) element.innerHTML = html;

  for (const attribute in attributes) {
    element.setAttribute(attribute, attributes[attribute]);
  }
  for (const listener in listeners) {
    element.addEventListener(listener, listeners[listener]);
  }
  for (const child of children) {
    element.appendChild(child);
  }
  return element;
}
