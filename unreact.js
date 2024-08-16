export function createElement(tag, child = "", atributes = ""){
    let newElement = document.createElement(tag)
    let content = document.createTextNode(child)
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

export function h1(child){
    let h1 = createElement("h1", child)
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
