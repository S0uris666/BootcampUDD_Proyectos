function actualizarUsuario(Usuario, UsuarioActualizado, id) {
    if(!Array.isArray(Usuario)) { 
        throw new Error("Invalid input types");}
    
    return Usuario.map((usuario) => (usuario.id === id ? UsuarioActualizado : usuario));
  }

  const Usuario = [
    { id: 3, nombre: "Barbara", edad: 25 },
    { id: 1, nombre: "Claudia", edad: 30 },
    { id: 2, nombre: "Luis", edad: 20 },
    { id: 4, nombre: "Cami ",edad:27 },
    { id: 5, nombre: "Susana" ,edad:40},
  ];

UsuarioActualizado = { id: 1, nombre: "Claudia" };
actualizado= actualizarUsuario(Usuario, UsuarioActualizado, 4);
console.log(actualizado);
