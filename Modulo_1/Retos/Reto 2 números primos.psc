Algoritmo Primo
	Definir number, i,UNO,DOS Como Entero
	Definir esPrimo Como Logico
	Definir factores Como Cadena
	UNO <- 1
	DOS <- 2
	Escribir "Ingrese un n�mero para saber si es primo: "
	Leer number
	// Validar que el numero sea mayor a 1
	Si number <= UNO Entonces
		Escribir "El n�mero debe ser mayor que 1"
	SiNo
		esPrimo <- Verdadero
		factores <- ""
		// Verificar si es divisible
		Para i <- DOS Hasta  number - UNO Hacer
			Si number MOD i = 0 Entonces
				esPrimo <- Falso
				Si factores="" Entonces
					factores <- ConvertirATexto(i)
				SiNo
					factores <- factores + ","+ ConvertirATexto(i)
				FinSi
			FinSi
		FinPara
		
		Si esPrimo Entonces
			Escribir " El n�mero ",number," es primo"
			//Escribir " factores( excluyendo 1 y ", number,"):",factores
		SiNo
			Escribir "El n�mero ", number, " no es primo."
			Escribir "Factores (excluyendo 1 y ", number, "): ", factores
		FinSi
	FinSi
	//Imprimir 

FinAlgoritmo
