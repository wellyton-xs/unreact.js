export function debug(desc = "", ...args){
    console.log(desc)
    for (const arg of args){
	console.log(arg)
    }
}

export function createElement(tag, ...children){
    let element = document.createElement(tag)
    debug(typeof(children), children, element)

    for(const child of children) {
	if (typeof child === 'string') {
	    element.appendChild(document.createTextNode(child))
	} else {
	    element.appendChild(child)
	}
    }

    return element
};

export function setAtt(attributes = {}, element){
    if (attributes) {
	console.log(attributes)
	Object.keys(attributes).forEach(attr => {
	    element.setAttribute(attr, attributes[attr]);
	    return element
	});
    }
}

export function printElement(tag){
    let element = createElement(tag);
    console.log(element);
}

export function updateDOM(element){
    const root = document.getElementById("#root")
    document.body.insertBefore(element, root)
}
