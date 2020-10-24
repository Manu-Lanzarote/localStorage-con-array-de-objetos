// Bucle que genere un array con 10 objetos persona:
const personas = [];

for (let i = 0; i <= 10; i++) {
  personas.push({
    id: `${i}`,
    nombre: `Nombre ${i}`,
    apellido1: `Apellido1 ${i}`,
    apellido2: `Apellido2 ${i}`,
    edad: `Edad ${i}`,
  });
}
//console.log(personas);

//Función que obtiene el valor del input select y lo imprime en pantalla
function muestraPersona() {
  let indice = document.getElementById("personas").value;
  console.log(indice);
  if (indice === "0") {
    document.getElementById(
      "div1"
    ).innerHTML = `<span id="seleccion">SELECCIONA UNA PERSONA</span>`;
  } else {
    //Imprimo los valores que corresponden al índice seleccionado en pantalla y un botón con la funcion guardar la seleccion el localStorage
    document.getElementById("div1").innerHTML = `
  <p>Id: ${personas[indice].id}</p>
  <p>Nombre: ${personas[indice].nombre}</p>
  <p>Primer apellido: ${personas[indice].apellido1}</p>
  <p>Segundo apellido: ${personas[indice].apellido2}</p>
  <p>Edad: ${personas[indice].edad}</p>
  <button onclick = ${"guardar()"}>Like</button>
  `;
  }
}
//Función para guardar el índice en localStorage
let indice2 = "";
function guardar() {
  console.log("Guardado en localStorage");
  indice2 = document.getElementById("personas").value;
  localStorage.setItem("Valor", indice2);
}

// Imprimo en like.html
function imprimir() {
  let aux = localStorage.getItem("Valor");
  document.getElementById("div2").innerHTML = `
  <p>Id: ${personas[aux].id}</p>
  <p>Nombre: ${personas[aux].nombre}</p>
  <p>Primer apellido: ${personas[aux].apellido1}</p>
  <p>Segundo apellido: ${personas[aux].apellido2}</p>
  <p>Edad: ${personas[aux].edad}</p>`;
}
