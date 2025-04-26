class Libro {
    constructor(titulo, autor, anioPublicacion,disponibilidad = true) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
        this.disponibilidad = disponibilidad;
    }
    mostrarInformacion() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Año de Publicación: ${this.anioPublicacion}`);
    }
}
class LibroInfantil extends Libro {
    constructor(titulo, autor, anioPublicacion, edadRecomendada,disponibilidad = true) {
        super(titulo, autor, anioPublicacion,disponibilidad);
        this.edadRecomendada = edadRecomendada;
    }
    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Edad Recomendada: ${this.edadRecomendada} años`);
    }
}
class Biblioteca {
    constructor(librosIniciales = []){
        this.libros = librosIniciales;
    }
    agregarLibro(libro) {
        this.libros.push(libro);
        console.log(`Libro agregado: ${libro.titulo}`);
    }
    buscarPorTitulo(titulo) {
        const librosEncontrados = this.libros.filter(libro => libro.titulo.toLowerCase().includes(titulo.toLowerCase()));
        if (librosEncontrados.length === 0) {
            return `El libro con el título "${titulo}" no fue encontrado.`;
        } else {
            return console.log(librosEncontrados); // Retorna los libros encontrados
        }
    }
    prestarLibro(titulo) {
        for (let libro of this.libros) {
            if (libro.titulo.toLowerCase() === titulo.toLowerCase()) {
                if (libro.disponibilidad) {
                    libro.disponibilidad = false;
                    return console.log(`Has prestado el libro: ${libro.titulo}`);
                } else {
                    return console.log(`El libro '${libro.titulo}' no está disponible.`);
                }
            }
        }
        return console.log("Libro no encontrado.");
    }
    mostrarLibrosDisponibles() {
        const disponibles = this.libros.filter(libro => libro.disponibilidad);
        if (disponibles.length === 0) {
            console.log("No hay libros disponibles actualmente.");
        } else {
            console.log("Libros disponibles:");
            disponibles.forEach(libro => {
                console.log(`- Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.anioPublicacion}, ${libro.disponibilidad ? "Disponible" : "No disponible"}`);
            });
        }
    }

}

// Ejemplo de uso
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
const libro2 = new LibroInfantil("El Principito", "Antoine de Saint-Exupéry", 1943, 6);
const libro3 = new Libro("1984", "George Orwell", 1949);
const libro4 = new LibroInfantil("Harry Potter y la piedra filosofal", "J.K. Rowling", 1997, 8);
const libro5 = new Libro("El Hobbit", "J.R.R. Tolkien", 1937);
const libro6 = new LibroInfantil("La telaraña de Carlota", "E.B. White", 1952, 5);
const libro7 = new Libro("El guardián entre el centeno", "J.D. Salinger", 1951);

const listaDeLibros = [libro1, libro2, libro3, libro4, libro5, libro6, libro7];
const mibiblioteca = new Biblioteca(listaDeLibros);

mibiblioteca.agregarLibro(new Libro("El alquimista", "Paulo Coelho", 1988));
mibiblioteca.agregarLibro(new LibroInfantil("Matilda", "Roald Dahl", 1988, 7));

mibiblioteca.mostrarLibrosDisponibles();
mibiblioteca.buscarPorTitulo("El Principito");
mibiblioteca.prestarLibro("El Principito");
mibiblioteca.mostrarLibrosDisponibles();
mibiblioteca.prestarLibro("El Principito");

