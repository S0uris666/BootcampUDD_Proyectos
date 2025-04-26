class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.encendido = false; // Estado inicial del encendido no depende del constructor parametro interno
    }
    Arrancar(){
        if(this.encendido == false){//podria usar el operador !this.encendido
            console.log(`El vehiculo ${this.marca} se encuentra detenido, arrancando.`)
            this.encendido = true; // Cambia el estado a encendido
            console.log(`El vehiculo ${this.marca} ha arrancado.`);
            
        }else{
            console.log(`El vehiculo ${this.marca} ya se encuentra en marcha.`);}
    }
    Detener(){
        if(this.encendido == true){//podria usar el operador this.encendido
            console.log(`El vehiculo ${this.marca} se encuentra en marcha, deteniendo.`);           
            this.encendido = false; // Cambia el estado a apagado
            console.log(`El vehiculo ${this.marca} se  ha detenido.`);

    }else{
        console.log(`El vehiculo ${this.marca} ya se encuentra detenido.`);}
}
    mostrarInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`);
    }
}

const miVehiculo = new Vehiculo("Toyota", "Corolla", 2020);
miVehiculo.mostrarInfo(); // Marca: Toyota, Modelo: Corolla, Año: 2020
miVehiculo.Arrancar();
miVehiculo.Detener(); // El vehiculo se ha detenido.
miVehiculo.Detener(); // El vehiculo ya se encuentra detenido.
miVehiculo.Arrancar();
miVehiculo.Arrancar(); // El vehiculo ya se encuentra en marcha. 

