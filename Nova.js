"use strict";
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
var createElement = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'div' : _b, _c = _a.classes, classes = _c === void 0 ? '' : _c, _d = _a.html, html = _d === void 0 ? '' : _d, _e = _a.attributes, attributes = _e === void 0 ? {} : _e, _f = _a.listeners, listeners = _f === void 0 ? {} : _f, _g = _a.children, children = _g === void 0 ? [] : _g;
    return new __Nova(type, classes, html, attributes, listeners, children).getElement();
};
var __Nova = /** @class */ (function () {
    function __Nova(type, classes, html, attributes, listeners, children) {
        this.type = 'div';
        this.classes = '';
        this.html = '';
        this.attributes = {};
        this.listeners = {};
        this.children = [];
        if (type.length > 1)
            this.type = type;
        if (Array.isArray(classes) && classes.length > 0) {
            this.classes = classes;
        }
        else if (classes.length > 0) {
            this.classes = classes;
        }
        if (html.length > 0)
            this.html = html;
        if (Object.keys(attributes).length > 0)
            this.attributes = attributes;
        if (Object.keys(listeners).length > 0)
            this.listeners = listeners;
        if (children.length > 0)
            this.children = children;
    }
    __Nova.prototype.getElement = function () {
        var _a;
        var element = document.createElement(this.type);
        if (this.classes.length > 0) {
            if (Array.isArray(this.classes)) {
                (_a = element.classList).add.apply(_a, this.classes);
            }
            else {
                element.className = this.classes;
            }
        }
        if (this.html.length > 0) {
            element.innerHTML = this.html;
        }
        for (var attribute in this.attributes) {
            element.setAttribute(attribute, this.attributes[attribute]);
        }
        for (var listener in this.listeners) {
            element.addEventListener(listener, this.listeners[listener]);
        }
        for (var _i = 0, _b = this.children; _i < _b.length; _i++) {
            var child = _b[_i];
            element.appendChild(child);
        }
        return element;
    };
    return __Nova;
}());
