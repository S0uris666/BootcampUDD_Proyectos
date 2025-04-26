class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    vender(cantidad){
        if(this.stock >= cantidad){
            this.stock -= cantidad;
            console.log(`Se han vendido ${cantidad} unidades de ${this.nombre}.`);
        }
        else{
            console.log(`No hay suficiente stock de ${this.nombre}.`);
        }
    }
}

//uso de la clase
const producto1 = new Producto("Laptop", 1000, 10);
producto1.vender(3); // Se han vendido 3 unidades de Laptop.
producto1.vender(8); // No hay suficiente stock de Laptop.
producto1.vender(5); // Se han vendido 5 unidades de Laptop.