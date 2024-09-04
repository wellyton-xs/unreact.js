export function createElement(tag, ...children){
    let element = document.createElement(tag)

    for(const child of children) {
	
	if (typeof child === "object"){
	    setAtt(child, element)
	}
	
	if (typeof child === 'string') {
	    element.appendChild(document.createTextNode(child))
	} else if(child instanceof Node){
	    element.appendChild(child)
	}
    }
    
    return element
};

export function setAtt(attributes = {}, element){
    if (attributes) {
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
