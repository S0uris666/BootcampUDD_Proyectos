class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  describir() {
    console.log(`Soy un ${this.nombre} y tengo ${this.edad} años.`);
  }
}

class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad); // Llama al constructor de la clase padre (Animal)
    this.raza = raza;
  }

  ladrar() {
    console.log(`${this.nombre}¡Guau! ¡Guau!`);
  }

}

const miPerro = new Perro("Rex", 5, "Labrador");
miPerro.describir(); // Soy un Rex y tengo 5 años.
miPerro.ladrar(); // Rex¡Guau! ¡Guau!