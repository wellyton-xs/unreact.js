import { createElement, updateDOM, setAtt, printElement, debug } from "./unreact-core.js"

export function div(...children){
    let element = createElement("div", ...children)
    updateDOM(element)    
    return element
}

export function h1(...children){
    let element = createElement("h1", ...children)
    updateDOM(element)

    return element
}

export function p(...children){
    let element = createElement("p", ...children)
    updateDOM(element)
    
    return element
}

export function a(...children){
    let element = createElement("a", ...children)
    updateDOM(element)
    
    return element
}

export function input(...children){
    let element = createElement("input", ...children)
    updateDOM(element)
    
    return element
}
