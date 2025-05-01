// === Base de datos: array de encuestas ===
const encuestas = [];

function crearPregunta(texto, opciones) {
    if (opciones.length < 2) {
      console.error("Una pregunta necesita al menos 2 opciones.");
      return null;
    }
    const votos = opciones.map(() => 0); // Inicializa votos con ceros
    return [texto, opciones, votos]; // Array en lugar de objeto ????? esta bien que devuelva eso???
  }

function crearEncuesta() {
  titulo= prompt("Ingrese el título de la encuesta:");  
  preguntasData = [];
  for (let i = 0; i < 8; i++) {
    const texto = prompt(`Escribe el texto de la pregunta ${i + 1}:`);
    const opciones = [];
    for (let j = 0; j < 3; j++) {
      const opcion = prompt(`Ingresa la opción ${j + 1} para la pregunta ${i + 1}:`);
      opciones.push(opcion);
    }
    preguntasData.push(crearPregunta(texto, opciones));
  }
  const encuesta = [titulo, preguntasData]; // [Título, preguntas]
  encuestas.push(encuesta);
  console.log(`Encuesta "${titulo}" creada con éxito.`);
  return encuesta; // Devuelve la encuesta creada
}

function iniciarCreacionEncuestas() {
  let continuar = confirm("¿Deseas agregar más preguntas a la encuesta?");

  if (continuar) {
    

    } 
    
  }



console.log(encuestas); // Muestra el array de encuestas
//preguntasData es un array [[texto, opciones(array), votos(array)]
crearEncuesta();
iniciarCreacionEncuestas();
