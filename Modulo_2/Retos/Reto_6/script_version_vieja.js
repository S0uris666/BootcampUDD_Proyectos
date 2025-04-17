//Crea un programa para gestionar un catálogo de productos en una tienda.
//El programa debe permitir agregar productos, eliminar productos, buscar productos por nombre 
// y mostrar todos los productos. Debes implementar funciones de declaración, 
// funciones de expresión, funciones anónimas y funciones de flecha.
//  Los productos deben tener un nombre y un precio.
///Implementa las siguientes funciones:
//agregarProducto(nombre, precio): Función de declaración que agrega un producto al catálogo.
//eliminarProducto(nombre): Función de expresión que elimina un producto del catálogo por su nombre.
//buscarProducto(nombre): Función anónima que busca un producto por su nombre y lo devuelve.
//mostrarProductos(): Función de flecha que muestra todos los productos en el catálogo.
//let catalogo = [];
// Implementa la función agregarProducto usando una función de declaración
// Implementa la función eliminarProducto usando una función de expresión
// Implementa la función buscarProducto usando una función anónima
// Implementa la función mostrarProductos usando una función de flecha
//Completa el código proporcionado implementando las funciones solicitadas utilizando los distintos 
// tipos de funciones en JavaScript. Asegúrate de probar tus funciones agregando, eliminando, buscando
//  y mostrando productos en el catálogo.

// Catálogo de productos
let catalogo = [];

// Función de declaración: agregarProducto
function agregarProducto(nombre, precio) { //se agrega nombre y precio como un array
    catalogo.push({ nombre, precio });
    console.log(`Producto "${nombre}" agregado con precio $${precio}.`);
}

// Función de expresión: eliminarProducto //fu7ncion expresion
const eliminarProducto = function(nombre) {
    const index = catalogo.findIndex(producto => producto.nombre === nombre);
    if (index !== -1) {//si lo encuentras entonces no es -1
        catalogo.splice(index, 1);//borra desde la posicion index un producto
        console.log(`Producto "${nombre}" eliminado del catálogo.`);
    } else {
        console.log(`Producto "${nombre}" no encontrado.`);
    }
};

// Función anónima: buscarProducto
const buscarProducto = function(nombre) {
    return catalogo.find(function(producto) {//aqui esta la funcion anonima que busca el producto con el mismo nombre que se ingreso
        return producto.nombre === nombre;
    });
};

// Función de flecha: mostrarProductos
const mostrarProductos = () => { //solo muestra losproductos, no necesita valor de entrada
    if (catalogo.length === 0) {
        console.log("El catálogo está vacío.");
    } else {
        console.log("Catálogo de productos:");
        catalogo.forEach(producto => {
            console.log(`- ${producto.nombre}: $${producto.precio}`);
        });
    }
};

// ==== Pruebas ====
agregarProducto("Zapatos", 29990);
agregarProducto("Polera", 15990);
agregarProducto("Jeans", 34990);

mostrarProductos();

let resultado = buscarProducto("Polera");
if (resultado) {
    console.log(`Producto encontrado: ${resultado.nombre}, $${resultado.precio}`);
} else {
    console.log("Producto no encontrado.");
}

eliminarProducto("Zapatos");
mostrarProductos();

eliminarProducto("Zapatillas"); // Producto inexistente