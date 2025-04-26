//Declaración de la clase:
class Coche {
    constructor(marca, modelo, color) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
    }
  
    describirCoche() {// metodo de la clase
      return `Este coche es un ${this.marca} ${this.modelo} de color ${this.color}.`;
    }
  }
  
  const miCoche = new Coche("Toyota", "Corolla", "rojo");
  console.log(miCoche.describirCoche()); // Este coche es un Toyota Corolla de color rojo.

  //Ejemplo 2
  class Muñeco {
    constructor(nombre, color, edad) {
      this.nombre = nombre;
      this.color = color;
      this.edad = edad;
    }
  
    presentarse() {
      console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy de color ${this.color}.`);
    }
  }

let muñeco1 = new Muñeco("Juanito", "rojo", 5);
console.log(muñeco1.presentarse());  // 👉 Dice: Hola, soy Juanito, tengo 5 años y soy de color rojo.

//Ejemplo 3 de Saludo

class Saludador {
    constructor(nombre) {
      this.nombre = nombre;
    }
    saludar() {//metodo de la clase
      console.log(`¡Hola, ${this.nombre}!`);
    }
  }
  
  const persona1 = new Saludador("Ana"); //creamos ana
  const persona2 = new Saludador("Carlos"); //creamos carlos
  
  persona1.saludar(); // ¡Hola, Ana!
  persona2.saludar(); // ¡Hola, Carlos!
//   
  const saludarPersona1 = persona1.saludar;
  saludarPersona1(); // ¡Hola, undefined!
  
  const saludarPersona1Bind = persona1.saludar.bind(persona1);
  saludarPersona1Bind(); // ¡Hola, Ana!

  //Encapsulamiento
  class CuentaBancaria {
    constructor(saldoInicial) {
      this._saldo = saldoInicial;
    }
  
    depositar(monto) {
      if (monto > 0) {
        this._saldo += monto;
        console.log(`Depósito exitoso de ${monto}. Saldo actual: ${this._saldo}`);
      } else {
        console.log("El monto a depositar debe ser mayor a 0.");
      }
    }
  
    retirar(monto) {
      if (monto > 0 && monto <= this._saldo) {
        this._saldo -= monto;
        console.log(`Retiro exitoso de ${monto}. Saldo actual: ${this._saldo}`);
      } else {
        console.log("El monto a retirar debe ser mayor a 0 y no debe exceder el saldo disponible.");
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo actual: ${this._saldo}`);
    }
  }
  
  const miCuenta = new CuentaBancaria(1000);
  miCuenta.depositar(500); // Depósito exitoso de 500. Saldo actual: 1500
  miCuenta.retirar(200);   // Retiro exitoso de 200. Saldo actual: 1300
  miCuenta.consultarSaldo(); // Saldo actual: 1300

  //abstraccion
  class Instrumento {
    constructor(nombre) {
      if (new.target === Instrumento) {
        throw new Error("La clase Instrumento no se puede instanciar directamente.");
      }
      this.nombre = nombre;
    }
  
    tocar() {
      throw new Error("El método tocar() debe ser implementado por la clase derivada.");
    }
  }
  
  class Guitarra extends Instrumento {
    constructor(nombre) {
      super(nombre);
    }
  
    tocar() {
      return `${this.nombre} suena como una guitarra.`;
    }
  }
  
  class Bateria extends Instrumento {
    constructor(nombre) {
      super(nombre);
    }
  
    tocar() {
      return `${this.nombre} suena como una batería.`;
    }
  }
  
  // const miInstrumento = new Instrumento("Instrumento genérico"); // Error: La clase Instrumento no se puede instanciar directamente.
  const miGuitarra = new Guitarra("Fender");
  console.log(miGuitarra.tocar()); // Fender suena como una guitarra.
  
  const miBateria = new Bateria("Pearl");
  console.log(miBateria.tocar()); // Pearl suena como una batería.