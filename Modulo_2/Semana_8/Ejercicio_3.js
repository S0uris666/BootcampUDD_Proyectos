function reservarAsiento(asientosDisponibles,asientoAReservar){
    if(!Array.isArray(asientosDisponibles)){
throw new Error("Invalid input types")}
    if(typeof asientoAReservar !== "number"){
        throw new Error("Invalid input types")
    }
    if(!asientosDisponibles.includes(asientoAReservar)){
        return [...asientosDisponibles]
    }
   return asientosDisponibles.filter(asiento => asiento !== asientoAReservar);

}

const disponibles=[1,2,3,4,5,6,7,8,9,10];
const asientoReservado= 5;
const reservacion= reservarAsiento(disponibles,11);

console.log(reservacion); 