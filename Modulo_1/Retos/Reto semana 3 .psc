Algoritmo SumaPares_ContarImpares
    Dimension number[10]
    Definir suma_pares, contador_impares, i Como Entero
    suma_pares <- 0
    contador_impares <- 0
	
    Escribir "Ingrese 10 n�meros enteros positivos (m�ximo 1000):"
	
    // Llenar el arreglo con validaci�n
    Para i <- 1 Hasta 10 Hacer
        Repetir
            Escribir "Ingrese un n�mero (1 - 1000): "
            Leer number[i]
        Hasta Que number[i] > 0 Y number[i] <= 1000
    FinPara
	
    // Recorrer el arreglo y calcular suma de pares y cantidad de impares
    Para i <- 1 Hasta 10 Hacer
        Si number[i] MOD 2 = 0 Entonces
            suma_pares <- suma_pares + number[i]
        Sino
            contador_impares <- contador_impares + 1
        FinSi
    FinPara
	
    // Mostrar resultados
    Escribir "La suma de los n�meros pares es: ", suma_pares
    Escribir "La cantidad de n�meros impares es: ", contador_impares
FinAlgoritmo