let climate;
let surface_water;
let planet_name;
let diameter;
let rotation_period;
let terrain;
let gravity;
let orbital_period;
let population;

let filmsUl;
let charactersUl;
const baseUrl = `https://swapi2.azurewebsites.net/api`

addEventListener('DOMContentLoaded', () => {
    planet_name = document.querySelector('h1#name')
    climate = document.querySelector('span#climate')
    surface_water = document.querySelector('span#surface_water')
    diameter = document.querySelector('span#diameter')
    rotation_period = document.querySelector('span#rotation_period')
    terrain = document.querySelector('span#terrain')
    gravity = document.querySelector('span#gravity')
    orbital_period = document.querySelector('span#orbital_period')
    population = document.querySelector('span#population')

    filmsUl = document.querySelector('#films>ul')
    charactersUl = document.querySelector('#characters>ul')
    const sp = new URLSearchParams(window.location.search)
    const id = sp.get('id')
    getPlanet(id)
});

async function getPlanet(id) {
    let planet;
    try {
        planet = await fetchPlanet(id)
        planet.characters = await fetchCharacters(planet)
        planet.films = await fetchFilms(planet)
    }
    catch(ex) {
        console.error(`Error reading planet ${id} data.`, ex.message);
    }
    renderPlanet(planet)
}

async function fetchPlanet(id) {
    let planet_url = `${baseUrl}/planets/${id}`;
    let planet = await fetch(planet_url)
    .then(res => res.json());
    return planet;
}

async function fetchCharacters(planet) {
    const url = `${baseUrl}/planets/${planet?.id}/characters`;
    const characters = await fetch (url)
    .then(res => res.json());
    return characters;
}

async function fetchFilms(planet) {
    const url = `${baseUrl}/planets/${planet?.id}/films`;
    const films = await fetch(url)
    .then(res => res.json());
    return films;
}

const renderPlanet = planet => {
    document.title = `SWAPI - ${planet?.name}`;
    planet_name.textContent = planet?.name
    climate.textContent = planet?.climate
    surface_water.textContent = planet?.surface_water
    diameter.textContent = planet?.diameter
    rotation_period.textContent = planet?.rotation_period
    terrain.textContent = planet?.terrain
    gravity.textContent = planet?.gravity
    orbital_period.textContent = planet?.orbital_period
    population.textContent = planet?.population

    const charactersLis = planet?.characters?.map(character => `<li><a href="/character.html?id=${character.id}">${character.name}</li>`);
    charactersUl.innerHTML = charactersLis.join("");

    const filmsLis = planet?.films?.map(film => `<li><a href="/film.html?id=${film.id}">${film.title}</li>`);
    filmsUl.innerHTML = filmsLis.join("");
}