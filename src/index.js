document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)

  const pokemonHTML = POKEMON.map(pokemon => (
    `<div class="pokemon-container">
        <div class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div class="logo-strip">
            <div class="logo-container">
              <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
            </div>
          </div>
        </div>
      </div>`
  )).join('');

  document.getElementById('pokemon-container').innerHTML = pokemonHTML;

  document.getElementById('pokemon-container').addEventListener('click', event => {
    if (event.target.dataset.action === 'flip') {
      const poke = POKEMON.find(pokemon => pokemon.id == event.target.dataset.id)
      if (event.target.src === poke.sprites.front) {
        event.target.src = poke.sprites.back
      } else {
        event.target.src = poke.sprites.front
      }
    }
  })

  document.getElementById('pokemon-search-input').addEventListener('input', event => {
    const results = POKEMON.filter(pokemon => pokemon.name.includes(event.target.value.toLowerCase()))
    const resultsHTML = results.map(pokemon => (
      `<div class="pokemon-container">
          <div class="pokemon-frame">
            <h1 class="center-text">${pokemon.name}</h1>
            <div class="logo-strip">
              <div class="logo-container">
                <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
              </div>
            </div>
          </div>
        </div>`
    )).join('')

    document.getElementById('pokemon-container').innerHTML = resultsHTML.length ? resultsHTML : `<p><center>There are no Pokémon here</center></p>`
  })


})
