document.addEventListener('DOMContentLoaded', () => {

  // Map each object in pokemon.js to its equivalent HTML card
  // The H1 name of each pokemon links to its bulbapedia page
  const pokemonCardHTMLArr = POKEMON.map(function(pokemonObj) {
    return returnPokeHTML(pokemonObj)
  })

  // Join the above array to create a long string of HTML for all pokemon cards
  const pokemonCardsHTML = pokemonCardHTMLArr.join('')

  // Set the inner HTML of pokemon-container to above long string, thereby rendering all pokemon on page load
  document.getElementById('pokemon-container').innerHTML = pokemonCardsHTML

  //flip sprite when img is clicked, using data-action attribute to check for current state
  document.getElementById('pokemon-container').addEventListener('click', function(event) {
    if (event.target.dataset.action === 'flip') {
      const getPokemon = POKEMON.find(function(pokemonObj) {
        return parseInt(event.target.dataset.id) === pokemonObj.id
      })
      if (event.target.src === getPokemon.sprites.front) {
        event.target.src = getPokemon.sprites.back
      } else {
        event.target.src = getPokemon.sprites.front
      }
    }
  })

  // Use filter on input box to get list of pokemon
  document.getElementById('pokemon-search-input').addEventListener('input', function(event) {
    const filteredPokemonObjs = POKEMON.filter(pokemonObj => (
      pokemonObj.name.includes(event.target.value.toLowerCase())
    ))
    const filteredPokemonObjsHTML = filteredPokemonObjs.map(pokemonObj => (
      returnPokeHTML(pokemonObj)
    )).join('')
    document.getElementById('pokemon-container').innerHTML = filteredPokemonObjsHTML
  })

})

// helper function to create HTML for any given pokemon object
function returnPokeHTML (pokemonObj) {
  return `<div class='pokemon-container'>
    <div class='pokemon-frame'>
      <h1 class='center-text'><a href='https://bulbapedia.bulbagarden.net/wiki/${pokemonObj.name}_(Pok%C3%A9mon)'>${pokemonObj.name}</a></h1>
      <table class='stats-table'>
        <tr>
          <td>${parseInt(pokemonObj.height) / 10} meters</td>
          <td>${parseInt(pokemonObj.weight) / 10} kilos</td>
        </tr>
      </table>
      <div class='image-container'>
        <div class='image-frame'>
        <img data-id="${pokemonObj.id}" data-action="flip" class="toggle-sprite" src="${pokemonObj.sprites.front}">
        </div>
      </div>
      <table class='stats-table'>
        <tr>
          <th>Abilities</th>
          <th>Type</th>
        </tr>
        <tr>
          <td><a href='https://bulbapedia.bulbagarden.net/wiki/${pokemonObj.abilities[0]}_(Ability)'>${pokemonObj.abilities[0]}</a></td>
          <td><a href='https://bulbapedia.bulbagarden.net/wiki/${pokemonObj.types[0]}_(type)'>${pokemonObj.types[0]}</a></td>
        </tr>
        <tr>
          <td><a href='https://bulbapedia.bulbagarden.net/wiki/${pokemonObj.abilities[1]}_(Ability)'>${pokemonObj.abilities[1]}</a></td>
          <td><a href='https://bulbapedia.bulbagarden.net/wiki/${pokemonObj.types[1]}_(type)'>${pokemonObj.types[1]}</a></td>
        </tr>
      </table>
    </div>
  </div>`
}
