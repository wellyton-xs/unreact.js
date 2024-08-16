import { h1, p, a } from "./unreact.js"

h1("teste")

function component() {
    h1("primeiro componente")
    p("esse é o primeiro componente feito com unreact")
    a("link aleatório")
}

component()
