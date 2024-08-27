function debug(desc = "", arg){
    console.log(desc)
    console.log("typeof:", typeof(arg))
    console.log("vof output", arg)
}

export function createElement(tag, child = "", attributes = {}){
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

export function div(child){
    let div = createElement("div", child)
    let element = updateDOM(div)

    return element
}

export function h1(child, attr){
    let h1 = createElement("h1", child, attr)    
    let element = updateDOM(h1)
    
    return element
}

export function p(child){
    let p = createElement("p", child)
    let element = updateDOM(p)
    
    return element
}

export function a(child){
    let a = createElement("a", child)
    let element = updateDOM(a)
    
    return element
}
