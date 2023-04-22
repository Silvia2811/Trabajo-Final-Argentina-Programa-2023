const $contenedor = document.getElementById("personajes");

const URL_API = "https://rickandmortyapi.com/api/character";

(fetch(URL_API))
.then((response) => {
    return response.json();
})
.then((data) =>{
    const personajes = data.results;
    
    for(let i= 0; i< personajes.length ; i++){
        const { name, gender, species, status, image } = personajes[i];

        $contenedor.innerHTML += `
        <div class="grid-item">
        <img src="${image}" alt="Imagen de ${name}">
        <h3>${name}</h3>
        <p>Gender:${gender} </p>
        <p>Species: ${species} </p>
        <p>Status: ${status}</p>
        </div>
        `;
     }
});