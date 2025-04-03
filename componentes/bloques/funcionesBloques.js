import { lista } from "../data/data.js";
import { bloque } from "./itemBloque.js";

function cargarBloques() {
    let contenedor = document.createElement('div')
    contenedor.className = "contenedor"

    let todaslositems = lista;

    todaslositems.forEach((letra) => {
        contenedor.appendChild(bloque(letra))
    })
    
    return contenedor;
}

export {cargarBloques}