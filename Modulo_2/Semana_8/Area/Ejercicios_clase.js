function Area() {
    let lado1 = parseFloat(prompt("Ingrese el lado 1 del rectángulo: "));
    let lado2 = parseFloat(prompt("Ingrese el lado 2 del rectángulo: "));
    if (lado1 < 0 || lado2 <0){
        return " ERROR: Lados no válidos";
    }
    if (typeof lado1 !== "number" || typeof lado2 !== "number"){
        return "ERROR: Lados no válidos";
    }
  const area =Math.round((lado1 * lado2*100) / 100);
  console.log(`El área del rectángulo es: ${area}`);
  return area // Redondear a 2 decimales
  
  
}

Area()
