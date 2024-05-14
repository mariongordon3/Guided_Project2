let filmH1;
let releasedSpan;
let producerSpan;
let directorSpan;
let episodeSpan;
let opening_crawl;
let charactersUl
let planetsUl;
const baseUrl = `https://swapi2.azurewebsites.net/api`;

// Runs on page load
addEventListener('DOMContentLoaded', () => {
  filmH1 = document.querySelector('h1#name');
  releasedSpan = document.querySelector('span#released');
  producerSpan = document.querySelector('span#producer');
  directorSpan = document.querySelector('span#director');
  episodeSpan = document.querySelector('span#episode');
  opening_crawl = document.querySelector('#opening_crawl');
  charactersUl = document.querySelector('#characters>ul');
  planetsUl = document.querySelector('#planets>ul');
  const sp = new URLSearchParams(window.location.search)
  const id = sp.get('id')
  getFilm(id)
});

async function getFilm(id) {
  let film;
  try {
    film = await fetchFilm(id)
    film.characters = await fetchCharacters(id)
    film.planets = await fetchPlanets(id)
  }
  catch (ex) {
    console.error(`Error reading film ${id} data.`, ex.message);
  }
  renderFilm(film);
}

async function fetchFilm(id) {
  let filmUrl = `${baseUrl}/films/${id}`;
  return await fetch(filmUrl)
    .then(res => res.json())
}

async function fetchCharacters(id) {
  const url = `${baseUrl}/films/${id}/characters`;
  const characters = await fetch(url)
    .then(res => res.json())
  return characters;
}

async function fetchPlanets(id) {
  const url = `${baseUrl}/films/${id}/planets`;
  const planets = await fetch(url)
    .then(res => res.json())
  return planets;
}

const renderFilm = film => {
  document.title = `SWAPI - ${film.title}`; 
  filmH1.textContent = film.title;
  releasedSpan.textContent = film.release_date;
  producerSpan.textContent = film.producer;
  directorSpan.textContent = film.director;
  episodeSpan.textContent = film.episode_id;
  opening_crawl.textContent = film.opening_crawl;
  const characterLis = film.characters.map(character => `<li><a href="/character.html?id=${character.id}">${character.name}</li>`)
  charactersUl.innerHTML = characterLis.join("");
  const planetLis = film.planets.map(planet => `<li><a href="/planet.html?id=${planet.id}">${planet.name}</li>`)
  planetsUl.innerHTML = planetLis.join("");
}
