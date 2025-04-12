function manejoTienda(productosIniciales = []) {
  //validar
  const inventario = Array.isArray(productosIniciales)
    ? productosIniciales.filter(
        (p) =>
          p.nombre &&
          typeof p.precio === "number" &&
          typeof p.cantidad === "number"
      )
    : [];
  return {
    inventario,

    agregarProducto(producto) {
      if (
        typeof producto !== "object" ||
        !producto.nombre ||
        typeof producto.precio !== "number" ||
        typeof producto.cantidad !== "number"
      ) {
        console.log(
          "Error: el producto debe ser un objeto con nombre, precio y cantidad válidos"
        );
        return;
      }
      const existente = this.inventario.find(
        (p) => p.nombre === producto.nombre
      );
      if (existente) {
        existente.cantidad += producto.cantidad;
        existente.precio = producto.precio;
        console.log(
          `Producto ${producto.nombre} actualizado. Nueva cantidad: ${existente.cantidad}`
        );
      } else {
        this.inventario.push(producto);
        console.log(`Producto ${producto.nombre} agregado al inventario.`);
      }
    },

    eliminarProducto(nombre) {
      const index = this.inventario.findIndex((p) => p.nombre === nombre);
      if (index !== -1) {
        this.inventario.splice(index, 1);
        console.log(`Producto ${nombre} eliminado del inventario.`);
      }
    },
    calcularValorTotal() {
        const total = this.inventario.reduce((sum, p) => {
          return sum + p.precio * p.cantidad;
        }, 0);
        console.log(`El valor total del inventario es: $${total}`);
        return total;
    }
  };
}

//Ejemplo de uso
const tienda = manejoTienda([
    { nombre: "Laptop", precio: 1000, cantidad: 5 },
    { nombre: "Mouse", precio: 25, cantidad: 20 },
]);

tienda.agregarProducto({ nombre: "Teclado", precio: 50, cantidad: 10 });
tienda.agregarProducto({ nombre: "Mouse", precio: 30, cantidad: 5 });
tienda.agregarProducto({ nombre: "pantalla", precio: 140, cantidad: 10 });
tienda.agregarProducto({ nombre: "pantalla", precio: 140, cantidad: 10 });

tienda.eliminarProducto("Laptop");
tienda.eliminarProducto("Tablet");

tienda.calcularValorTotal();