import { listaX, listaD } from "../data/data.js";

function bloque() {
        let div = document.createElement('div');
        div.className = "divTarea"

        let divX = document.createElement('buttom')
        divX.className = "divDeCancelar"
        divX.innerText = "X"
        div.appendChild(divX)

        let divD = document.createElement('buttom')
        divD.className = "divDeAgregar"
        divD.innerText = "/"
        div.appendChild(divD)

        divX.addEventListener("click", function(){
           listaX.length + 1;
           console.log(listaX.length)
        })

        divD.addEventListener("click", function(){
            listaD.length + 1;
            console.log(listaD.length)
        })



        return div
}

export {bloque}