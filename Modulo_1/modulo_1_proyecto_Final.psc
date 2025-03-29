Algoritmo Calcular_Costo_Final
    Definir costo_envio, costo_total, subtotal Como Real
    Definir cupón_descuento, iva, tipo_descuento Como Real
    Definir destino Como Cadena
    Definir n, i Como Entero
	
    // Pedir número de productos
    Escribir "Ingrese la cantidad de productos diferentes a comprar:"
    Leer n
	
	Dimensión precios_originales[n], precios_descuento[n], precios_con_iva[n], precios_finales[n], descuento_cantidad[n], porcentajeDescuento[n]
    Dimensión cantidades[n], pesos[n], nombres_productos[n]
	
    // Entrada de datos con bucle
    Para i <- 1 Hasta n Hacer
		Escribir "Ingrese el Nombre del producto ", i, ":"
		Leer nombres_productos[i]
		
        Escribir "Ingrese el precio original del producto ", i, ":"
        Leer precios_originales[i]
		
		Repetir
			Escribir "¿Se debe aplicar algún descuento por cupón?"
			Escribir "Escribir 1. Aplicar descuento"
			Escribir "Escribir 2. No se debe aplicar descuento"
			Leer cupón_descuento
		Hasta Que cupón_descuento = 1 O cupón_descuento = 2
		
		Si cupón_descuento = 1 Entonces	
			Repetir
				Escribir "Ingrese el porcentaje de descuento a aplicar."
				Escribir "El descuento no puede ser menor a 0% ni mayor al 100%."
				Leer porcentajeDescuento[i]
			Hasta Que porcentajeDescuento[i] <= 100 Y porcentajeDescuento[i] >= 0
		FinSi
		
		Escribir "----------------------------------------------"
		Escribir " A continuación se detallan los descuentos por cantidad de productos:"
		Escribir " 1 Unidad no posee descuento"
		Escribir " 2-10 Unidades 10% dcto"
		Escribir" 11 - 20 Unidades 20% dcto"
		Escribir" 21 - 50 Unidades 40% dcto"
		Escribir" Sobre 50 Unidades 50% dcto"
		Escribir "----------------------------------------------"
		
        Escribir "Ingrese las unidades de este producto a comprar:"
        Leer cantidades[i]
		
		Si cantidades[i] > 50 Entonces 
			tipo_descuento <- 1//50%
		Sino Si 21 <= cantidades[i] & cantidades[i] <= 50 Entonces
				tipo_descuento <- 2// 40%
		Sino Si 11 <= cantidades[i] & cantidades[i] <= 20 Entonces
					tipo_descuento <- 3 // 20%
		Sino Si 2 <= cantidades[i] & cantidades[i] <= 10 Entonces
				tipo_descuento <- 4 // 10%
		Sino 
				tipo_descuento <- 5 // 0%
	
	Fin si
	Fin si
	Fin Si
	Fin Si

        Escribir "Ingrese el peso total del paquete de este producto en kg:"
        Leer pesos[i]
		
        // Aplicar descuento por cantidad (5% si compra más de 1 unidad)
		
		Segun tipo_descuento Hacer 
			caso 1: descuento_cantidad[i] <- 50
				
			Caso 2: descuento_cantidad[i]  <- 40
				
			Caso 3: descuento_cantidad[i]  <- 20
				
			Caso 4: descuento_cantidad[i]  <- 10
				
			Caso 5: descuento_cantidad[i]  <- 0
				
		FinSegun
		
		// Aplicar descuento del cupón
        precios_descuento[i] <- precios_originales[i] * (1 - porcentajeDescuento[i] / 100)
		
        // Aplicar IVA 19%
        precios_con_iva[i] <- precios_descuento[i] * (1 + 19 / 100)
		precios_finales[i] <- precios_con_iva[i] * (1 - descuento_cantidad[i] / 100)
		
    FinPara
	
    // Solicitar destino
    Escribir "Ingrese el destino del envío:"
    Leer destino
	
    // Calcular costo de envío (suma total)
    costo_envio <- 0
    Para i <- 1 Hasta n Hacer
        costo_envio <- costo_envio + (10 + (2 * pesos[i]))  // Costo fijo de $10 + $2 por kg
    FinPara
	
    // Calcular subtotal y costo total
    subtotal <- 0
    Para i <- 1 Hasta n Hacer
        subtotal <- subtotal + (precios_finales[i] * cantidades[i])
    FinPara
    costo_total <- subtotal + costo_envio
	
    // Mostrar desglose de costos
    Escribir "========================="
    Escribir "Resumen de la compra"
    Escribir "========================="
    Para i <- 1 Hasta n Hacer
        Escribir "  Producto ", i, ": " nombres_productos[i]
        Escribir "  Precio original: $", precios_originales[i]
		Escribir "  Descuento por cupón: ", porcentajeDescuento[i], " %"
		Escribir "  Cantidad comprada: ", cantidades[i]," Asociada a un descuento aplicado de ",descuento_cantidad[i], " %"
        Escribir "  Precio con descuento: $", precios_descuento[i]
        Escribir "  Precio con IVA del 19%: $", precios_con_iva[i]
        Escribir "  Precio final por unidad: $", precios_finales[i]

        Escribir "-------------------------"
    FinPara
    Escribir "Costo de envío total: $", costo_envio
    Escribir "========================="
    Escribir "Costo total de la compra: $", costo_total
    Escribir "========================="
	
FinAlgoritmo