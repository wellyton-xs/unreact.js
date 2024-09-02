import { createElement, updateDOM, setAtt, printElement, debug } from "./unreact-core.js"

export function div(attr = {}, ...children){
    let element = createElement("div", ...children)
    setAtt(attr, element)
    updateDOM(element)    
    return element
}

export function h1(attr = {}, ...children){
    let element = createElement("h1", ...children)
    setAtt(attr, element)
    updateDOM(element)
    
    return element
}

export function p(attr = {}, ...children){
    let element = createElement("p", ...children)
    setAtt(attr, element)
    updateDOM(element)
    
    return element
}

export function a(attr = {}, ...children){
    let element = createElement("a", ...children)
    setAtt(attr, element)
    updateDOM(element)
    
    return element
}

export function input(attr = {}, ...children){
    let element = createElement("input", ...children)
    setAtt(attr, element)
    updateDOM(element)
    
    return element
}
