//Aplicacion lista de contactos
//Objetivo:administrar llista de contactos utilizando diferentes tipos de funciones
// Funcion declaracion para agregar un contacto
//Funcion de expresion para eliminar un contacto
//Funcion expresion para eliminar contacto
//Funcion anonima para buscar contactos por su nombre
//Funcion flecha para mostrar todos los contactos
// Función de declaración: agregarContacto
let catalogo = [];
function gestionarContactos(accion, datos) {
  // Función de declaración: agregar contactos
  function agregarContactos(lista) {
    if (!Array.isArray(lista)) {
      console.log("Debes ingresar un array de contactos.");
      return;
    }

    const contactosValidos = lista.filter(contacto => {
      const esValido =
        typeof contacto === "object" &&
        typeof contacto.nombre === "string" &&
        typeof contacto.telefono === "number" &&
        typeof contacto.correo === "string";

      if (!esValido) {
        console.log(" Contacto inválido detectado y omitido:", contacto);
      }

      return esValido;
    });

    if (contactosValidos.length === 0) {
      console.log("No se agregaron contactos válidos.");
      return;
    }

    catalogo.push(...contactosValidos);
    console.log(`${contactosValidos.length} contacto(s) agregado(s) correctamente.`);
  }

  // Función de expresión: eliminar contacto
  const eliminarContacto = function(nombre) {
    const index = catalogo.findIndex(contacto => contacto.nombre === nombre);
    if (index !== -1) {
      catalogo.splice(index, 1);
      console.log(`Contacto "${nombre}" eliminado correctamente.`);
    } else {
      console.log(` Contacto "${nombre}" no encontrado.`);
    }
  };

  // Función anónima: buscar contacto
  const buscarContacto = function(nombre) {
    const encontrado = catalogo.find(function(contacto) {
      return contacto.nombre === nombre;
    });

    if (encontrado) {
      console.log(" Contacto encontrado:", encontrado);
    } else {
      console.log(`Contacto "${nombre}" no encontrado.`);
    }
  };

  // Función flecha: mostrar contactos
  const mostrarContactos = () => {
    if (catalogo.length === 0) {
      console.log("El catálogo está vacío.");
    } else {
      console.log("Lista de contactos:");
      catalogo.forEach(contacto => {
        console.log(`- ${contacto.nombre} |  ${contacto.telefono} |  ${contacto.correo}`);
      });
    }
  };

  // Ejecución según la acción
  switch (accion) {
    case "agregar":
      agregarContactos(datos);
      break;
    case "eliminar":
      eliminarContacto(datos);
      break;
    case "buscar":
      buscarContacto(datos);
      break;
    case "mostrar":
      mostrarContactos();
      break;
    default:
      console.log(" Acción no válida. Usa 'agregar', 'eliminar', 'buscar' o 'mostrar'.");
  }
};

// Ejemplo de uso
// Agregar contactos
gestionarContactos("agregar", [
    { nombre: "Juan", telefono: 123456789, correo: "juan@mail.com" },
    { nombre: "Luna", telefono: 987654321, correo: "luna@mail.com" }
  ]);
  
  // Mostrar todos
  gestionarContactos("mostrar");
  
  // Buscar contacto
  gestionarContactos("buscar", "Luna");
  
  // Eliminar contacto
  gestionarContactos("eliminar", "Juan");
  
  // Mostrar de nuevo
  gestionarContactos("mostrar");