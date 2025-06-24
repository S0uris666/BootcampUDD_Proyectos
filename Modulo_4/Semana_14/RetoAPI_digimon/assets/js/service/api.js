// Este es un servicio que se encarga de hacer peticiones a la API de Digimon
export async function getAllDigimons(page = 0) {
  const url = `https://digi-api.com/api/v1/digimon?page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.content; // aquí están los Digimon de esa página
}