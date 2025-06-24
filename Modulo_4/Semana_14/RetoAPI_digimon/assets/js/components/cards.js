export const createDigimonCard = (digimon) => {
  return `
    <div class="card col-md-2 col-sm-6 col-12 m-2 animate-fade-in ">
      <img src="${digimon.image}" class="card-img-top" alt="${digimon.name}">
      <div class="card-body">
        <h5 class="card-title">${digimon.name}</h5>
        
        <p class="card-text">ID: ${digimon.id}</p>
      </div>
    </div>
  `;
};