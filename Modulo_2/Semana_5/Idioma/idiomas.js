function saludar() {
    const idioma = document.getElementById("idioma").value;
    const saludoElemento = document.getElementById("saludo");
    let mensaje = "";

    switch (idioma) {
      case 'es':
        mensaje = "¡Hola!";
        break;
      case 'en':
        mensaje = "Hello!";
        break;
      case 'fr':
        mensaje = "Bonjour!";
        break;
      case 'de':
        mensaje = "Hallo!";
        break;
      case 'it':
        mensaje = "Ciao!";
        break;
      default:
        mensaje = "Idioma no reconocido.";
    }
    saludoElemento.textContent = mensaje;
}