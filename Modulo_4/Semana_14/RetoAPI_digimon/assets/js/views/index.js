import { getAllDigimons } from "../service/api.js";
import { createDigimonCard } from "../components/cards.js";

let currentPage = 0;

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("digimon-container");
  const btnSiguiente = document.getElementById("btn-siguiente");
  const btnAnterior = document.getElementById("btn-anterior");

  await mostrarPagina(container, currentPage);

  btnAnterior.addEventListener("click", async () => {
    currentPage--;
    if (currentPage < 0) {
      currentPage = 0; // Evitar que la página sea negativa
    }
    await mostrarPagina(container, currentPage);
  });

  btnSiguiente.addEventListener("click", async () => {
    currentPage++;
    await mostrarPagina(container, currentPage);
  });
});

async function mostrarPagina(container, page) {
  const digimons = await getAllDigimons(page);
  container.innerHTML = "";
  digimons.forEach((digimon) => {
    container.innerHTML += createDigimonCard(digimon);
  });
}
