// calculadora
// Pedimos datos al usuario
let numero1= parseFloat(prompt("Introducde el primer número: "));
let numero2= parseFloat(prompt("Introducde el segundo número: "));
let operacion = prompt("Introduce la operación deseada (Sumar, restar, multiplicar,dividir): ");

// Validar los datos ingresados
if (isNaN(numero1) || isNaN(numero2)){
    alert("Por favor, introduce números válidos.")
}
else{
    let resultado; // Variable para almacenar el resultado de la operación
    // Realizar la operación según la opción elegida
    switch (operacion.toLowerCase()) { //segun-hacer-casos
        case "sumar":
            resultado = numero1 + numero2;
            break; // No sigue avanzando
        case "restar":
            resultado = numero1 - numero2;
            break;
        case "multiplicar":
            resultado = numero1 * numero2;
            break;
        case "dividir":
            if (numero2 !== 0) { // se pueden poner if y else en case
                resultado = numero1 / numero2;
            } else {
                alert("No se puede dividir entre cero.");
                resultado = null; // Asignar null si la división no es válida
            }
            break;
        default:// es cuando no se cumple ningun caso
            // Si el usuario introduce una operación no válida
            alert("Operación no válida. Por favor, elige entre sumar, restar, multiplicar o dividir.");
            resultado = null; // Asignar null si la operación no es válida
    }
//Mostrar el resultado al usuario
alert("El resultado de la operación es: " + resultado); // concatenar
// Si resultado es null no se muestra nada
} 
