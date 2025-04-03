import { cargarBloques } from "./funcionesBloques.js"

function bloques() {
    let div = document.createElement('div')
    div.className = "bloques"
    div.appendChild(cargarBloques())

    return div
}

export {bloques}