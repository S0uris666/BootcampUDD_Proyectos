class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Libro extends Producto {
  constructor(nombre, precio, autor) {
    super(nombre, precio);
    this.autor = autor;
  }

  resumen() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Precio: $${this.precio.toFixed(2)}`);
  }
}

// Ejemplo de uso
const libro1 = new Libro(
  "Cien años de soledad",
  19990,
  "Gabriel García Márquez"
);
libro1.resumen();
