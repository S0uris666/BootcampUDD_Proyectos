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

