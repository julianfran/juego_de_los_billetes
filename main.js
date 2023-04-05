const mostrarNombre = document.querySelector('input')
const saludo = document.getElementById('saludo')
const contenedorBienvenida = document.getElementById('contenedorBienvenida')
const bienvenida = document.getElementById('bienvenida')
const contenedorBilletes = document.getElementById('contenedorBilletes')
const contenedor = document.getElementById('contenedor')


//Elementos aleatorios
const dataBilletes = data.billetes
const billeteAleatorio1 = dataBilletes[Math.floor(Math.random() * data.billetes.length)]
const billeteAleatorio2 = dataBilletes[Math.floor(Math.random() * data.billetes.length)]
console.log(billeteAleatorio1)
console.log(billeteAleatorio2.img)



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
                    </div>
                  `
  borrarDiv(contenedor, contenedorBienvenida)
  contenedor.innerHTML = imprimir
})

let mostrarBilletes = (() => {
  let imprimir = `
                    <div id="opcion1">
                      <h3></h3>
                      <img src="${billeteAleatorio1.img}" alt="">
                    </div>
                    <div id="opcion2">
                      <h3></h3>
                       <img src="${billeteAleatorio2.img}" alt="">
                    </div>
                  `;
  contenedorBilletes.innerHTML = imprimir
})

const play = (() =>{
imprimirNombre()
mostrarBilletes()
})





