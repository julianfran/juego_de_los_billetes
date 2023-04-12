const mostrarNombre = document.querySelector('input')
const saludo = document.getElementById('saludo')
const contenedorBienvenida = document.getElementById('contenedorBienvenida')
const bienvenida = document.getElementById('bienvenida')
const contenedor = document.getElementById('contenedor')
const contenedorBilletes = document.getElementById('contenedorBilletes')

const tablero = document.getElementById('intentosYPuntaje')


//Elementos aleatorios
const dataBilletes = data.billetes
let billeteAleatorio1 = dataBilletes[Math.floor(Math.random() * data.billetes.length)]
let billeteAleatorio2 = dataBilletes[Math.floor(Math.random() * data.billetes.length)]
console.log(billeteAleatorio1)
console.log(billeteAleatorio2)



//Contador de puntaje
let puntaje = 0
let intentos = 0

let opcion1MasGrande = billeteAleatorio1.valor > billeteAleatorio2.valor;
let opcion2MasGrande = billeteAleatorio1.valor < billeteAleatorio2.valor;
let opcionIguales = billeteAleatorio1.valor === billeteAleatorio2.valor;

console.log(opcion1MasGrande)
    console.log(opcion2MasGrande)
    console.log(opcionIguales)

//Respuestas
const respuesta = ((opcion) =>{
  const tablero = document.getElementById('intentosYPuntaje')
  if(opcion){
    puntaje += 3
    console.log("¡Correcto! Has sumado 3 puntos")
    console.log(puntaje)
  }
  else{
    puntaje -= 1
    console.log("Respuesta incorrecta")
    console.log(puntaje)
  }
  intentos += 1
 let imprimir = `  <div id="intentos"><p>${intentos}/15</p>
 </div>
 <div id="puntaje"><p>${puntaje}</p>
 </div>`
 tablero.innerHTML = imprimir
 mostrarBilletes()

})

//Preguntas

let preguntas = [
  `<h2>¿Qué billete o moneda tiene MAS valor?</h2>
  <div id="opciones">
  <div id="opcion1">
    <h3></h3>
    <img src="${billeteAleatorio1.img}" alt="">
    <button type="button" class="btn btn-success" onclick="respuesta(opcion1MasGrande)"><i class="bi bi-hand-index"></i> ${billeteAleatorio1.nombre}</button>

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
    <button type="button" class="btn btn-success" onclick="respuesta(opcion2MasGrande)"><i class="bi bi-hand-index"></i> ${billeteAleatorio1.nombre}</button>

  </div>
  <div id="opcion2">
    <h3></h3>
     <img src="${billeteAleatorio2.img}" alt="">
     <button type="button" class="btn btn-success" onclick="respuesta(opcion1MasGrande)"><i class="bi bi-hand-index"></i> ${billeteAleatorio2.nombre}</button>
  </div>
  </div>
  <button type="button" class="btn btn-warning" onclick="respuesta(opcionIguales)">¡Valen lo mismo!</button>
` ]
let imprimirPregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
console.log(imprimirPregunta);


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
                    <h2>${jugador}</h2>
                    
                    <div id="intentosYPuntaje">
                    </div>
                    </div>
                  `
  borrarDiv(contenedor, contenedorBienvenida)
  contenedor.innerHTML = imprimir
})

let mostrarBilletes = (() => {
  if(intentos == 0){
    imprimirPregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
  
    contenedorBilletes.innerHTML = imprimirPregunta
  }
  else{
    billeteAleatorio1 = dataBilletes[Math.floor(Math.random() * data.billetes.length)]
    billeteAleatorio2 = dataBilletes[Math.floor(Math.random() * data.billetes.length)]

    opcion1MasGrande = billeteAleatorio1.valor > billeteAleatorio2.valor;
    opcion2MasGrande = billeteAleatorio1.valor < billeteAleatorio2.valor;
  opcionIguales = billeteAleatorio1.valor === billeteAleatorio2.valor;

    console.log(billeteAleatorio1)
    console.log(billeteAleatorio2)
    console.log(opcion1MasGrande)
    console.log(opcion2MasGrande)
    console.log(opcionIguales)
    preguntas = [
      `<h2>¿Qué billete o moneda tiene MAS valor?</h2>
      <div id="opciones">
      <div id="opcion1">
        <h3></h3>
        <img src="${billeteAleatorio1.img}" alt="">
        <button type="button" class="btn btn-success" onclick="respuesta(opcion1MasGrande)"><i class="bi bi-hand-index"></i> ${billeteAleatorio1.nombre}</button>
    
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
        <button type="button" class="btn btn-success" onclick="respuesta(opcion2MasGrande)"><i class="bi bi-hand-index"></i> ${billeteAleatorio1.nombre}</button>
    
      </div>
      <div id="opcion2">
        <h3></h3>
         <img src="${billeteAleatorio2.img}" alt="">
         <button type="button" class="btn btn-success" onclick="respuesta(opcion1MasGrande)"><i class="bi bi-hand-index"></i> ${billeteAleatorio2.nombre}</button>
      </div>
      </div>
      <button type="button" class="btn btn-warning" onclick="respuesta(opcionIguales)">¡Valen lo mismo!</button>
    ` ]
  imprimirPregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
  console.log(imprimirPregunta);

      contenedorBilletes.innerHTML = imprimirPregunta
  }
  

  
})

const play = (() =>{
imprimirNombre()
mostrarBilletes()
})





