import { listaD, listaX } from "../data/data.js"

function header() {
    let header = document.createElement('div')
    header.className = "header"

    let divPX = document.createElement('div')
    divPX.className = "divPX"
    divPX.innerText = "Total="+listaX.length
    header.appendChild(divPX)

    let divPD = document.createElement('div')
    divPD.className = "divPD"
    divPD.innerText = "Total="+listaD.length
    header.appendChild(divPD)

    return header
}

export {header}