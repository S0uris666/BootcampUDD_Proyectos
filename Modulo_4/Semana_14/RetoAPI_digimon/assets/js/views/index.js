import { getAllDigimons } from "../service/api.js";
import { getFiveDigimons } from "../utils/helpers.js";
import { createDigimonCard } from "../components/cards.js";

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("digimon-container");

  const allDigimons = await getAllDigimons();
  const selectedDigimons = getFiveDigimons(allDigimons, 5);

  selectedDigimons.forEach(digimon => {
    const cardHTML = createDigimonCard(digimon);
    container.innerHTML += cardHTML;
  });
});