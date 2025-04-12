function crearUsuario(nombre, apellido, email, ocupacion, edad) {
    
    if (typeof nombre !== "string" || nombre.trim() === "") {
        throw new Error("El nombre es obligatorio y debe ser una cadena de texto válida.");
    }
    if (typeof apellido !== "string" || apellido.trim() === "") {
        throw new Error("El apellido es obligatorio y debe ser una cadena de texto válida.");
    }
    if (typeof email !== "string" || email.trim() === "" ||!email.includes("@")||!email.includes(".")) {
        throw new Error("El email es obligatorio y debe ser una cadena de texto válida.");
    }
    if (typeof ocupacion !== "string" || ocupacion.trim() === "") {
        throw new Error("La ocupación es obligatoria y debe ser una cadena de texto válida.");
    }
    if (typeof edad !== "number" || edad <= 0|| edad > 120 ) {
        throw new Error("La edad es obligatoria y debe ser un número positivo entre 0 y 120.");
    }
//crear objeto
return {
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        email: email.trim(),
        ocupacion: ocupacion.trim(),
        edad: edad
    };
}


//Ejemplo de uso
const usuario1= crearUsuario("Anna","Garcia","ana@gmail.com","estudiante",22);
console.log(usuario1);

