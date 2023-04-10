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


//Contador de puntaje
let puntaje = 0

let opcion1MasGrande = billeteAleatorio1.valor > billeteAleatorio2.valor;
let opcion2MasGrande = billeteAleatorio1.valor < billeteAleatorio2.valor;
let opcionIguales = billeteAleatorio1.valor === billeteAleatorio2.valor;
//Respuestas
const respuesta = (opcion =>{
 
  if(opcion){
    puntaje += 3
    console.log("¡Correcto! Has sumado 3 puntos")
  }
  else{
    console.log("Respuesta incorrecta")
  }

})

//Preguntas

const preguntas = [
  `<h2>¿Qué billete o moneda tiene MAS valor?</h2>
  <div id="opciones">
  <div id="opcion1">
    <h3></h3>
    <img src="${billeteAleatorio1.img}" alt="">
    <button type="button" class="btn btn-success" onclick="respesta(opcion1MasGrande)"><i class="bi bi-hand-index"></i> ${billeteAleatorio1.nombre}</button>

  </div>
  <div id="opcion2">
    <h3></h3>
     <img src="${billeteAleatorio2.img}" alt="">
     <button type="button" class="btn btn-success" onclick="respuesta(opcion2MasGrande)"><i class="bi bi-hand-index"></i> ${billeteAleatorio2.nombre}</button>
  </div>
  </div>
  <button type="button" class="btn btn-warning" onclick="respuesta(opcionIguales)">¡Valen lo mismo!</button>
`,
`<h2>¿Qué billete o moneda tiene MENOS valor?</h2>
  <div id="opciones">
  <div id="opcion1">
    <h3></h3>
    <img src="${billeteAleatorio1.img}" alt="">
    <button type="button" class="btn btn-success" onclick="respesta(opcion2MasGrande)"><i class="bi bi-hand-index"></i> ${billeteAleatorio1.nombre}</button>

  </div>
  <div id="opcion2">
    <h3></h3>
     <img src="${billeteAleatorio2.img}" alt="">
     <button type="button" class="btn btn-success" onclick="respuesta(opcion1MasGrande)"><i class="bi bi-hand-index"></i> ${billeteAleatorio2.nombre}</button>
  </div>
  </div>
  <button type="button" class="btn btn-warning" onclick="respuesta(opcionIguales)">¡Valen lo mismo!</button>
` ]

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
                    <p>¡Juguemos!</p>
                    </div>
                  `
  borrarDiv(contenedor, contenedorBienvenida)
  contenedor.innerHTML = imprimir
})

let mostrarBilletes = (() => {
  let imprimir = preguntas[Math.floor(Math.random() * preguntas.length)];
  contenedorBilletes.innerHTML = imprimir
})

const play = (() =>{
imprimirNombre()
mostrarBilletes()
})





