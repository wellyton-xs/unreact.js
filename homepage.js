import * as tag from "./unreact.js"

tag.h1({}, "this is a main title")
tag.p({}, "this is a paragraph")
tag.a({href: ""}, "this is a link")

tag.div({}, tag.p({}, "this is a div"))

tag.input({})
