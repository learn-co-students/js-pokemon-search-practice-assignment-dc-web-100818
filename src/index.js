
document.addEventListener('DOMContentLoaded', () => {
  getPokemon(POKEMON)
  const searchInput = document.getElementById("pokemon-search-input")
  searchInput.addEventListener("keyup", filterPokemon)
})


const getPokemon = (currentPokemon) => {
  let pokemonContainer = document.getElementById("pokemon-container")
  currentPokemon.forEach(pokemon => {
    pokemonContainer.append(createPokemonCard(pokemon))
  })
}

const createPokemonCard = (pokemon) => {
  let newPokemonCard = document.createElement("div")
  newPokemonCard.className = "pokemon-card"
  newPokemonCard.innerHTML = `<h1 class="center-text">${pokemon.name}</h1><img src=${pokemon.sprites.front}>`
  let pokemonImage = newPokemonCard.children[1]
  const togglePokemonImg = (e) => {
  if(e.target.src === pokemon.sprites.front){
    e.target.src = pokemon.sprites.back
  } else {
    e.target.src = pokemon.sprites.front
  }
}

  pokemonImage.addEventListener("click", togglePokemonImg)
  return newPokemonCard
}

const filterPokemon = (e) => {
  let pokemonContainer = document.getElementById("pokemon-container")
  pokemonContainer.innerHTML = ""
  let searchTerm = e.target.value
  let matchingPokemon = POKEMON.filter(pokemon => pokemon.name.includes(searchTerm.toLowerCase()));
  getPokemon(matchingPokemon);
  console.log(matchingPokemon);
}

// const togglePokemonImg = (e) => {
// console.log(e.target.src);
// let pokemonSrc = e.target.src
// pokemonSrc
// }
