function debug(desc = "", arg){
    console.log(desc)
    console.log("typeof:", typeof(arg))
    console.log("vof output", arg)
}

export function createElement(tag, child, attributes = {}){
    let newElement = document.createElement(tag)
    let content = document.createTextNode(child);
    
    if (attributes) {
        Object.keys(attributes).forEach(attr => {
            newElement.setAttribute(attr, attributes[attr]);
        });
    }
    
    newElement.appendChild(content)
    return newElement
};

export function printElement(tag){
    let element = createElement(tag);
    console.log(element);
}

export function updateDOM(element){
    const root = document.getElementById("#root")
    document.body.insertBefore(element, root)
}

export function div(child, attr){
    let element = createElement("div", child)
    updateDOM(element)
    
    return element
}

export function h1(child, attr){
    let element = createElement("h1", child, attr)    
    updateDOM(element)
    
    return element
}

export function p(child, attr){
    let element = createElement("p", child, attr)
    updateDOM(element)
    
    return element
}

export function a(child, attr){
    let element = createElement("a", child, attr)
    updateDOM(element)
    
    return element
}

