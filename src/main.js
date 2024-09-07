//import * as dom from "./unreact.js"

import { main, section, div, h, p, a} from "./unreact.js"

let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, adipisci molestias sequi, tenetur ducimus neque sed enim animi recusandae voluptatum exercitationem perspiciatis ratione? Tempore nihil nulla illum illo iusto sapiente."

function component(){
    let elements = div(
	h(2, {class: "section-title"}, "title"),
	p(lorem),
	a({href: "https://github.com/wellyton-xs/unreact.js"}, "references")
    )
    
    return elements
}

function flexible_component(title, desc, ref, refTitle){
    let elements = div(
	h(2, {class: "section-title"}, title),
	p(desc),
	a({href: ref}, refTitle)
    )
    
    return elements
}

function section_component(...children){
    let elements = section({class: "border border-white border-solid"}, ...children)
    
    return elements
}

main(
    h(1, "Main title"),
    p({id: "Introduction"},
      "this is a paragraph"),
    section_component(
	{id: "s1"},
	component()
    ),
    
    section_component(
	{id: "s2"},
	flexible_component("how to use a flexible component",
			   `${lorem}`,
			   "https://github.com/wellyton-xs/unreact.js",
			   "references")
    )
)
