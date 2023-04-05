const mostrarNombre = document.querySelector('input')
const saludo = document.getElementById('saludo')
const contenedorBienvenida = document.getElementById('contenedorBienvenida')
const bienvenida = document.getElementById('bienvenida')
const contenedorBilletes = document.getElementById('contenedorBilletes')

// Borrar elemento hijo
const borrarDiv = ((padre, hijo) => {
  padre.removeChild(hijo)
})


// Prevent Default
function stopDefAction(evt) {
  evt.preventDefault();
}


// Imprime el saludo
let imprimirNombre = (() => {
  localStorage.setItem("jugador", nombreUsuario.value)
  jugador = localStorage.getItem("jugador")
  let imprimir = `
                    <div id="saludo">
                    <h2>¡Hola ${jugador}!</h2>
                    <p>Vamos con el primer desafío:</p>
                    </div>`
  borrarDiv(contenedor, contenedorBienvenida)
  main.innerHTML = imprimir
})

let mostrarBilletes = (()=>{
  
})

