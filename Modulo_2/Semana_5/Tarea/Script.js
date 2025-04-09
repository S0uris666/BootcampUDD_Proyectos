function jugar_piedra_papel_tijera() {
    // Obtener elecciones de los jugadores
    const jugador1 = prompt("Jugador 1, elige: piedra, papel o tijera").toLowerCase();
    const jugador2 = prompt("Jugador 2, elige: piedra, papel o tijera").toLowerCase();

    // Validar entradas
    const opcionesValidas = ["piedra", "papel", "tijera"];
    if (!opcionesValidas.includes(jugador1) || !opcionesValidas.includes(jugador2)) {
      alert("Una de las opciones no es válida. Intenta nuevamente.");
      return;
    }

    // Verificar empate
    if (jugador1 === jugador2) {
      alert("¡Empate! Ambos eligieron " + jugador1);
    } else {
      // Determinar ganador
      if (
        (jugador1 === "piedra" && jugador2 === "tijera") ||
        (jugador1 === "papel" && jugador2 === "piedra") ||
        (jugador1 === "tijera" && jugador2 === "papel")
      ) {
        alert("¡Gana Jugador 1! " + jugador1 + " vence a " + jugador2);
      } else {
        alert("¡Gana Jugador 2! " + jugador2 + " vence a " + jugador1);
      }
    }
  }

  // Ejecutar el juego al cargar la página
  jugar_piedra_papel_tijera();