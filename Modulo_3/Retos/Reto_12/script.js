const tablero = document.getElementById("tablero");

// Colores duplicados
const coloresBase = ["red", "blue", "green", "yellow"];
let colores = [...coloresBase, ...coloresBase];
colores = colores.sort(() => 0.5 - Math.random()); // Mezclar

// Crear botones
colores.forEach((color, index) => {
  const col = document.createElement("div");
  col.classList.add("col");

  const boton = document.createElement("button");
  boton.classList.add("boton-color");
  boton.style.color = color; // se usa currentColor en CSS
  boton.dataset.color = color;
  boton.dataset.index = index;

  col.appendChild(boton);
  tablero.appendChild(col);
});

let seleccionados = [];
let bloqueado = false;

// Manejador de clics
tablero.addEventListener("click", (e) => {
  const boton = e.target;
  if (!boton.classList.contains("boton-color") || bloqueado || boton.classList.contains("oculto")) return;

  boton.style.opacity = "1";
  seleccionados.push(boton);

  if (seleccionados.length === 2) {
    const [b1, b2] = seleccionados;
    if (b1.dataset.index === b2.dataset.index) return;

    bloqueado = true;
    if (b1.dataset.color === b2.dataset.color) {
      setTimeout(() => {
        b1.classList.add("oculto");
        b2.classList.add("oculto");
        limpiar();
      }, 500);
    } else {
      setTimeout(() => {
        b1.style.opacity = "0.3";
        b2.style.opacity = "0.3";
        limpiar();
      }, 800);
    }
  }
});

function limpiar() {
  seleccionados = [];
  bloqueado = false;
}