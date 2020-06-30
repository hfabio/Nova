# Nova
A tool to create DOM elements dynamically with a simple syntax

Is really simple to use, you can create a chain of elements with semantic in pure javaScript avoiding to nomeate a huge amount of variables.

Every createElement call is a element creation stack, then you can set a huge amount of properties to your elements!

---
# Installation

You can insert the script tag in your HTML:

## Dev environment
```html
  <script type="text/javascript" src=""></script>
```
## Production environment
```html
  <script type="text/javascript" src=""></script>
```

---
# How to use

|  Attribute 	| Type                                	| Default value 	| Description                                                                                                                                                                                                                                             	|
|:----------:	|-------------------------------------	|---------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
|    type    	| string                              	| div           	| The HTMLElement to be created.                                                                                                                                                                                                                          	|
|   classes  	| string \| Array<string>             	| ''            	| A string with a class or an array of classes<br>E.g. classes: 'card' \| classes: ['btn', 'btn-bg', 'btn-success']                                                                                                                                       	|
|    html    	| string                              	| ''            	| Same as element innerHTML, you can type anything here<br>E.g. html:'Hello world'                                                                                                                                                                        	|
| attributes 	| { [key:string]:string}              	| {}            	| Receive an object where the key is the element attribute caller (like 'onclick') and the value is a string calling an method.<br>E.g. attribues: {onclick: 'someFunction()'}                                                                            	|
|  listeners 	| { [key:string]: function reference} 	| {}            	| Receive an object where the key is the element eventListener caller (like 'click') and the value is a reference to an method.<br>E.g. listeners: {click: someFunction}                                                                                  	|
|  children  	| Array<HTMLElement>                  	| []            	| Receive a HTMLElement array, and you can use this feature to create a stack of elements.<br>E.g. createElement({type: 'div', children: [<br>createElement({type: 'h1', html: 'Hello world'}),createElement({type: 'h2', html: 'Nova is here!'}),<br>]}) 	|

after [install](#installation) you can create a HTML node/nodelist using this tool like this:
call the createElement method (and don't forget it receives an object with some properties) and then add to the DOM.
you can set in the method these parameters


## Creating a simple element

```javascript
  let element = createElement({ type: 'span', html: 'Hello world!'});
  document.body.appendChild(element);
```

## Adding property or listener

```javascript
  let element = createElement({ type: 'span', html: 'Hello world! click me', attributes: { onclick: 'alert("teste")' }});
  document.body.appendChild(element);
```

## Creating dinnamically stuff

```javascript
  let shop_list = ['beans', 'floor', 'butter', 'soda'];
  let element = createElement({
    type: 'ul',
    children: shop_list.map(item => createElement({type: 'li', html: item}))
    });
  document.body.appendChild(element);
```
