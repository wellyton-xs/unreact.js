function debug(desc = "", ...args){
    // why the fucking console out of the loop is in loop too?
    console.log("+++++++ {init} +++++++")
    for (const arg of args){
	console.log(`
        +++++++ {log} +++++++
        ${desc}
        ${arg}
        +++++++ {endlog} +++++++
        `)
    }
    console.log("+++++++ {end} +++++++")
}

export function createElement(tag, ...children){
    let element = document.createElement(tag)
    debug("CreateElement fn: ", typeof(children), children, element)

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

export function root(){
    
}

export function div(attr, ...children){
    let element = createElement("div", ...children)
    element.setAttr = setAtt(attr, element)
    updateDOM(element)
    
    return element
}

export function h1(attr, ...children){
    let element = createElement("h1", ...children)
    updateDOM(element)
    
    return element
}

export function p(attr, ...children){
    let element = createElement("p", ...children)
    updateDOM(element)
    
    return element
}

export function a(attr, ...children){
    let element = createElement("a", ...children)
    element.setAttr = setAtt(attr, element)
    updateDOM(element)
    
    return element
}
