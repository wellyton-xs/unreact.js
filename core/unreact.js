import { createElement, updateDOM, setAtt, printElement } from "./unreact-core.js"

export function div(...children){
    let element = createElement("div", ...children)
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

export function ul(...children){
    let element = createElement("ul", ...children)
    updateDOM(element)
    
    return element
}

export function li(...children){
    let element = createElement("li", ...children)
    updateDOM(element)
    
    return element
}

export function span(...children){
    let element = createElement("span", ...children)
    updateDOM(element)
    
    return element
}

export function strong(...children){
    let element = createElement("strong", ...children)
    updateDOM(element)
    
    return element
}

export function img(...children){
    let element = createElement("img", ...children)
    updateDOM(element)
    
    return element
}

export function textarea(...children){
    let element = createElement("textarea", ...children)
    updateDOM(element)
    
    return element
}

export function br(...children){
    let element = createElement("br", ...children)
    updateDOM(element)
    
    return element
}

export function tr(...children){
    let element = createElement("tr", ...children)
    updateDOM(element)
    
    return element
}

export function main(...children){
    let element = createElement("main", ...children)
    updateDOM(element)
    
    return element
}

export function header(...children){
    let element = createElement("header", ...children)
    updateDOM(element)
    
    return element
}

export function section(...children){
    let element = createElement("section", ...children)
    updateDOM(element)
    
    return element
}

export function article(...children){
    let element = createElement("input", ...children)
    updateDOM(element)
    
    return element
}

export function footer(...children){
    let element = createElement("footer", ...children)
    updateDOM(element)
    
    return element
}

export function h(_, ...children){
    let element = createElement(`h${_}`, ...children)
    updateDOM(element)

    return element
}

export function h1(...children){
    let element = createElement("h1", ...children)
    updateDOM(element)

    return element
}

export function h2(...children){
    let element = createElement("h2", ...children)
    updateDOM(element)

    return element
}

export function h3(...children){
    let element = createElement("h3", ...children)
    updateDOM(element)

    return element
}

export function h4(...children){
    let element = createElement("h4", ...children)
    updateDOM(element)

    return element
}

export function h5(...children){
    let element = createElement("h5", ...children)
    updateDOM(element)

    return element
}

export function button(...children){
    let element = createElement("button", ...children)
    updateDOM(element)

    return element
}

