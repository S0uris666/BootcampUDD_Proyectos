// Este es un servicio que se encarga de hacer peticiones a la API de Digimon
export const getAllDigimons = async () => {
  try {
    const response = await fetch('https://digi-api.com/api/v1/digimon');
    const data = await response.json();
    console.log(data.content);
  
    return data.content;
    
  } catch (error) {
    console.error('Error fetching all digimon with fetch', error);
  }
};


