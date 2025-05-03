function agregarPaciente(pacientes,nuevoPaciente){
    if(!Array.isArray(pacientes)){
        throw new Error ("El primer argumento no es un array.");
        return;
    }
    if(typeof nuevoPaciente !== "object"){
        throw new Error ("El segundo argumento no es un objeto.");
        return;
    }
if(pacientes.nombre === nuevoPaciente.nombre){
    console.log("El paciente ya existe,ingrese nuevo paciente");
    return}
    return [...pacientes, nuevoPaciente];
}
  function buscarPaciente(pacientes,nombre){
    if(!Array.isArray(pacientes)){
        console.log("El primer argumento no es un array.");
        return;
    }
    if(typeof nombre !== "string"){
        console.log("El segundo argumento no es un string.");
        return;
    }
    const pacienteEncontrado= pacientes.find(paciente => paciente.nombre === nombre);

return pacienteEncontrado || "Paciente no encontrado"; //meahorro un if
  }
  
//usar funciones
  const pacientes = [
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 25 },
    { nombre: "Pedro", edad: 40 },
  ];
  
  const nuevoPaciente = { nombre: "Ana", edad: 28 };
  
  const pacientesActualizados = agregarPaciente(pacientes, nuevoPaciente);
  
  console.log(pacientes); // Array original de pacientes
  console.log(pacientesActualizados);

  console.log(buscarPaciente(pacientesActualizados, "Cami"))
  console.log(buscarPaciente(pacientesActualizados, "Juan"))  // { nombre: "Juan", edad: 30 }