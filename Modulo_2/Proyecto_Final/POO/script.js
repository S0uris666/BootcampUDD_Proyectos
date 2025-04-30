// Clase que representa una sola pregunta de la encuesta
class Pregunta {
    constructor(texto, opciones) {
      this.texto = texto; // Texto de la pregunta
      this.opciones = opciones; // Opciones de respuesta (array)
      this.votes = new Array(opciones.length).fill(0); // Se crea un array del mismo largo que las opciones, lleno de ceros, para contar los votos por opción
    }
  
    // Método para votar por una opción (usamos operadores de comparación y aritméticos)
    vote(opcionesIndex) {
      if (opcionesIndex >= 0 && opcionesIndex < this.opciones.length) {// evita errores de índice, por ejemplo, si el usuario ingresa un número fuera del rango de opciones
        this.votes[opcionesIndex]++; // Suma 1 voto a la opción seleccionada
      } else {
        console.error("Índice de opción inválido."); // Control de flujo ante errores
      }
    }
  
    // Obtener resultados como array de strings
    Mostrar() {
      return this.opciones.map((opcion, i) => `${opcion}: ${this.votes[i]} votos`);
    }
  }
  
  // Clase para manejar una encuesta completa con varias preguntas
  class Encuesta {
    constructor(nombre) {
      this.nombre = nombre;
      this.preguntas = []; // Contenedor de preguntas (objetos Pregunta)
      this.permitirVotar = false;
    }
  
    // Agrega una pregunta nueva a la encuesta
    agregarPreguntas(preguntaTexto, opciones) {
      if (opciones.length < 2) {
        console.error("Una pregunta debe tener al menos 2 opciones.");
        return;
      }
      const pregunta = new Pregunta(preguntaTexto, opciones);// Se crea un nuevo objeto Pregunta
      this.preguntas.push(pregunta);

    // Se agrega a la lista de preguntas
    }
    finalizarEncuesta() {
      const total = this.preguntas.length;
  
      if (total < 8) {
        const faltan = 8 - total;
        console.log(`Debes agregar al menos 8 preguntas. Faltan ${faltan}.`);
        return;
      }
  
      this.permitirVotar = true;
      console.log(" Encuesta finalizada. Ahora puedes comenzar a votar.");
    }


    // Método para votar en una pregunta específica
    vote(preguntaIndex, opcionesIndex) {

      if (preguntaIndex >= 0 && preguntaIndex < this.preguntas.length && this.preguntas.length >= 8) {
        this.preguntas[preguntaIndex].vote(opcionesIndex);// vota por la opción seleccionada de la pregunta correspondiente
      } else{
        console.log("La encuesta no está activa para votar, faltan preguntas.");
        return;
      }
    }
  
    // Muestra los resultados de todas las preguntas
    mostrarResultados() {
      console.log(`Resultados para: ${this.nombre}`);
      this.preguntas.forEach((q, i) => {
        console.log(`\n${i + 1}. ${q.texto}`);
        q.Mostrar().forEach(result => console.log("- " + result));
      });
    }
  }
  
  // Creamos una encuesta con 8 preguntas
  const encuesta = new Encuesta("Encuesta de preferencias");
  
 // encuesta.agregarPreguntas("¿Cuál es tu color favorito?", ["Rojo", "Azul", "Verde"]);
 // encuesta.agregarPreguntas("¿Qué deporte prefieres?", ["Fútbol", "Básquetbol", "Tenis"]);
  encuesta.agregarPreguntas("¿Cuál es tu comida favorita?", ["Pizza", "Sushi", "Hamburguesa"]);
  encuesta.agregarPreguntas("¿Qué tipo de música te gusta?", ["Pop", "Rock", "Clásica"]);
  encuesta.agregarPreguntas("¿Qué red social usas más?", ["Instagram", "TikTok", "X"]);
  encuesta.agregarPreguntas("¿Qué estación del año prefieres?", ["Verano", "Invierno", "Primavera"]);
  encuesta.agregarPreguntas("¿Cuál es tu película favorita?", ["Matrix", "Titanic", "Avatar"]);
  encuesta.agregarPreguntas("¿Qué animal prefieres?", ["Perro", "Gato", "Pájaro"]);
  encuesta.agregarPreguntas("¿Qué tipo de vacaciones prefieres?", ["Playa", "Montaña", "Ciudad"]);
  
  encuesta.finalizarEncuesta();

  // Simulamos votos (control de flujo, operadores, estructuras)
  encuesta.vote(0, 1); // Azul
  encuesta.vote(1, 0); // Fútbol
  //encuesta.vote(2, 2); // Hamburguesa
  //encuesta.vote(3, 1); // Rock
 // encuesta.vote(4, 0); // Instagram
 // encuesta.vote(5, 2); // Primavera
 // encuesta.vote(6, 2); // Avatar
 // encuesta.vote(7, 0); // Perro
 // encuesta.vote(0, 1); // Azul otra vez
  
  // Mostrar resultados en consola
  encuesta.mostrarResultados();


  // === Interacción por consola === // PENDIENTE, para mejorar.