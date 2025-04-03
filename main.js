import { bloques } from "./componentes/bloques/bloque.js"
import { header } from "./componentes/header/header.js"

let DOM = document.querySelector('#root')
DOM.appendChild(cargarDOM()) 

function cargarDOM() {
    let contenedor = document.createElement('div')
    contenedor.className = "miDom"
    contenedor.appendChild(header())
    contenedor.appendChild(bloques())
    
    return contenedor
}
    
