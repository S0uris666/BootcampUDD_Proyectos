//Dado un array [1, 2, 3, 4], usa .map() para obtener [2, 4, 6, 8].

let numeros= [1, 2, 3, 4];
let doble= numeros.map(num => num*2);
console.log(doble); // [2, 4, 6, 8]

//Convertir a mayúsculas
//Dado ["hola", "mundo", "javascript"], conviértelo en ["HOLA", "MUNDO", "JAVASCRIPT"].

let palabras= ["hola", "mundo", "javascript"];
let mayusculas = palabras.map(palabra => palabra.toUpperCase());

//Obtener longitud de palabras
//Dado ["sol", "nube", "lluvia"], devuelve [3, 4, 6].
let elementos= ["sol", "nube", "lluvia"];
let longitudes= elementos. map(elemento => elemento.length);

//Extraer propiedades de objetos

const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Sofía", edad: 20 }
];
//
//Usa .map() para obtener solo los nombres: ["Ana", "Luis", "Sofía"].

let nombres = personas.map(persona => persona.nombre);
console.log(nombres); // ["Ana", "Luis", "Sofía"]

//Ejemplo Actualizar usuarios con map
function actualizarUsuario(usuarios, usuarioActualizado, id) {
    return usuarios.map((usuario) => (usuario.id === id ? usuarioActualizado : usuario));
  }
  
  const usuarios = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "María" },
    { id: 3, nombre: "Pedro" },
  ];
  
  const usuarioActualizado = { id: 2, nombre: "Ana" };
  
  const usuariosActualizados = actualizarUsuario(usuarios, usuarioActualizado, 2);
  
  console.log(usuarios); // Array original de usuarios
  console.log(usuariosActualizados);

  // Funcion de alto orden, aplicar una funcion atraves de otra
  function aplicarFuncion(func, valor) {
    return func(valor);
  }
  
  function cuadrado(numero) {
    return numero * numero;
  }
  
  const resultado = aplicarFuncion(cuadrado, 4); // 16


  