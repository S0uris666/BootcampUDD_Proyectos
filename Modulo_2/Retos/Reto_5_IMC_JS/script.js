 // Solicitar datos
 let peso = parseFloat(prompt("Por favor, ingrese su peso (kg):"));
 let altura = parseFloat(prompt("Por favor, ingrese su altura (m):"));

 // Calcular IMC
 let imc = peso / (altura * altura);
 let imcRedondeado = imc.toFixed(2);

 // Clasificación OMS
 let clasificacion = "";

 if (imc < 18.5) {
   clasificacion = "por debajo del peso normal.";
 } else if (imc < 24.9) {
   clasificacion = "en el rango de peso normal.";
 } else if (imc < 29.9) {
   clasificacion = "en el rango de sobrepeso.";
 } else if (imc < 34.9) {
   clasificacion = "en obesidad grado 1.";
 } else if (imc < 39.9) {
   clasificacion = "en obesidad grado 2.";
 } else {
   clasificacion = "en obesidad grado 3.";
 }

 // Mostrar resultados
 let mensaje = "Su IMC es: " + imcRedondeado + " Usted se encuentra " + clasificacion;
 let datos_ingresados= "Peso: " + peso + " kg , Altura: " + altura + " m";

 document.getElementById("datos").innerHTML = datos_ingresados;
 document.getElementById("resultado").innerHTML = mensaje;