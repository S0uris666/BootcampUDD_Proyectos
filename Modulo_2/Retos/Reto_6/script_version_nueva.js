//Aplicacion lista de productos
//Objetivo:administrar llista de productos utilizando diferentes tipos de funciones
// Funcion declaracion para agregar un producto
//Funcion de expresion para eliminar un producto
//Funcion expresion para eliminar producto
//Funcion anonima para buscar productos por su nombre
//Funcion flecha para mostrar todos los productos
// Función de declaración: uctoucto
let catalogo = [];
function gestionarProductos(accion, datos) {
  // Función de declaración: agregar productos
  function agregarProducto(lista) {
    if (!Array.isArray(lista)) {
      console.log("Debes ingresar un array de productos.");
      return;
    }

    const productosValidos = lista.filter(producto => {
      const esValido =
        typeof producto === "object" &&
        typeof producto.nombre === "string" &&
        typeof producto.precio === "number";

      if (!esValido) {
        console.log(" producto inválido detectado y omitido:", producto);
      }

      return esValido;
    });

    if (productosValidos.length === 0) {
      console.log("No se agregaron productos válidos.");
      return;
    }

    catalogo.push(...productosValidos);
    console.log(`${productosValidos.length} producto(s) agregado(s) correctamente.`);
  }

  // Función de expresión: eliminar producto
  const eliminarProducto = function(nombre) {
    const index = catalogo.findIndex(producto => producto.nombre === nombre);
    if (index !== -1) {
      catalogo.splice(index, 1);
      console.log(`producto "${nombre}" eliminado correctamente.`);
    } else {
      console.log(` producto "${nombre}" no encontrado.`);
    }
  };

  // Función anónima: buscar producto
  const buscarProducto = function(nombre) {
    const encontrado = catalogo.find(function(producto) {
      return producto.nombre === nombre;
    });

    if (encontrado) {
      console.log(" producto encontrado:", encontrado);
    } else {
      console.log(`producto "${nombre}" no encontrado.`);
    }
  };

  // Función flecha: mostrar productos
  const mostrarProductos = () => {
    if (catalogo.length === 0) {
      console.log("El catálogo está vacío.");
    } else {
      console.log("Lista de productos:");
      catalogo.forEach(producto => {
        console.log(`- ${producto.nombre} |  ${producto.precio} |  `);
      });
    }
  };

  // Ejecución según la acción
  switch (accion) {
    case "agregar":
      agregarProducto(datos);
      break;
    case "eliminar":
      eliminarProducto(datos);
      break;
    case "buscar":
      buscarProducto(datos);
      break;
    case "mostrar":
      mostrarProductos();
      break;
    default:
      console.log(" Acción no válida. Usa 'agregar', 'eliminar', 'buscar' o 'mostrar'.");
  }
};

// Ejemplo de uso
// Agregar productos
gestionarProductos("agregar", [
    { nombre: "zapatos", precio: 5990  },
    { nombre: "percha", precio: 19990 },
  ]);
  
  // Mostrar todos
  gestionarProductos("mostrar");
  
  // Buscar producto
  gestionarProductos("buscar", "zapatos");
  
  // Eliminar producto
  gestionarProductos("eliminar", "percha");
  
  // Mostrar de nuevo
  gestionarProductos("mostrar");