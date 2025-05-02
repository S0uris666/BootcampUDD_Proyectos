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
    const titulo = prompt("Ingrese el título de la encuesta:");
    let preguntasDATA = [];
  
    for (let i = 0; i < 8; i++) {
      const texto = prompt(`Escribe el texto de la pregunta ${i + 1}:`);
      const opciones = [];
      for (let j = 0; j < 3; j++) {
        opciones.push(prompt(`Ingresa la opción ${j + 1} para la pregunta ${i + 1}:`));
      }
      const pregunta = crearPregunta(texto, opciones);
      if (pregunta) preguntasDATA.push(pregunta);
    }
  
    let agregarMas = confirm("¿Deseas agregar más preguntas?");
    while (agregarMas) {
      const texto = prompt("Escribe el texto de la nueva pregunta:");
      const opciones = [];
      for (let j = 0; j < 3; j++) {
        opciones.push(prompt(`Ingresa la opción ${j + 1}:`));
      }
      const pregunta = crearPregunta(texto, opciones);
      if (pregunta) preguntasDATA.push(pregunta);
      agregarMas = confirm("¿Deseas agregar otra pregunta?");
    }
  
    const encuesta = [titulo, preguntasDATA]; // [título, [[texto, opciones, votos], ...]]
    encuestas.push(encuesta);
    console.log(`Encuesta "${titulo}" creada con éxito.`);
    return encuesta;
  }
//Votar encuesta
function votarEnEncuesta(encuesta) {
  const [titulo, preguntas] = encuesta;
  alert(`Comienza la votación para la encuesta: ${titulo}`);

  let seguirVotando = true;

  while (seguirVotando) {
    const preguntaIndex = parseInt(prompt(`¿Sobre qué pregunta deseas votar? (1 a ${preguntas.length})`)) - 1;

    if (isNaN(preguntaIndex) || preguntaIndex < 0 || preguntaIndex >= preguntas.length) {
      alert("Número de pregunta inválido.");
      continue;
    }

    const [texto, opciones, votos] = preguntas[preguntaIndex];
    let opcionesTexto = opciones.map((op, i) => `${i + 1}. ${op}`).join("\n");
    const respuesta = parseInt(prompt(`${texto}\n${opcionesTexto}\nElige una opción:`)) - 1;

    if (isNaN(respuesta) || respuesta < 0 || respuesta >= opciones.length) {
      alert("Opción inválida.");
      continue;
    }

    votos[respuesta]++; // Modifica el array de votos
    seguirVotando = confirm("¿Deseas seguir votando?");
  }
}

function mostrarResultados(encuesta) {
  const [titulo, preguntas] = encuesta;
  console.log(`\nResultados para la encuesta: "${titulo}"`);

  preguntas.forEach(([texto, opciones, votos], index) => {
    console.log(`\n${index + 1}. ${texto}`);
    opciones.forEach((op, i) => {
      console.log(`- ${op}: ${votos[i]} voto(s)`);
    });
  });
}

function iniciarSistemaEncuestas() {
  let continuar = true;

  while (continuar) {
    const encuesta = crearEncuesta();
    votarEnEncuesta(encuesta);
    mostrarResultados(encuesta);
    continuar = confirm("¿Deseas crear otra encuesta?");
  }
}
iniciarSistemaEncuestas();
// === Fin del código ===
