document.addEventListener('DOMContentLoaded', () => {

  // Map each object in pokemon.js to HTML generator helper function, then join to create long HTML string
  const pokemonCardsHTML = POKEMON.map(pokemonObj => returnPokeHTML(pokemonObj)).join('')

  // Set the inner HTML of pokemon-container to above long HTML string, thereby rendering all pokemon on page load
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

  // Live search
  document.getElementById('pokemon-search-input').addEventListener('input', function(event) {
    // filter for pokemon
    const filteredPokemonObjs = POKEMON.filter(pokemonObj => (
      pokemonObj.name.includes(event.target.value.toLowerCase())
    ))
    // create html string for filtered pokemon
    const filteredPokemonObjsHTML = filteredPokemonObjs.map(pokemonObj => (
      returnPokeHTML(pokemonObj)
    )).join('')
    // render filtered pokemon HTML string, or give error message if none
    document.getElementById('pokemon-container').innerHTML = filteredPokemonObjsHTML.length ? filteredPokemonObjsHTML : `<p class='center-text'>There are no Pokemon here</p>`
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
        ${insertAbilitiesAndTypesRows(pokemonObj)}
      </table>
    </div>
  </div>`
}
  // helper function to insert rows in abilities/types table in returnPokeHTML function
function insertAbilitiesAndTypesRows(pokemonObj) {
  let tableRows = []
  let ability, type, index, abilityText
  let i = 0
  while (pokemonObj.abilities[i] || pokemonObj.types[i]) {
    ability = pokemonObj.abilities[i] || ''
    type = pokemonObj.types[i] || ''
    abilityDispText = ability.replace('-', ' ') || ''
    // below if statement is for linking to bulbapedia ability page compliantly by replacing - with _ and capitalizing second word
    if (ability.includes('-')) {
      ability = ability.replace('-', '_')
      index = (ability.indexOf('_'))
      ability = ability.substr(0, index + 1) + ability[index + 1].toUpperCase() + ability.substr(index + 2)
    }
    tableRows.push(`<tr>
      <td><a href='https://bulbapedia.bulbagarden.net/wiki/${ability}_(Ability)'>${abilityDispText}</a></td>
      <td><a href='https://bulbapedia.bulbagarden.net/wiki/${type}_(type)'>${type}</a></td>
    </tr>`)
    i++
  }
  return tableRows.join('')
}

// below is hard-coded table rows...just in case
// <tr>
//   <td><a href='https://bulbapedia.bulbagarden.net/wiki/${pokemonObj.abilities[0]}_(Ability)'>${pokemonObj.abilities[0]}</a></td>
//   <td><a href='https://bulbapedia.bulbagarden.net/wiki/${pokemonObj.types[0]}_(type)'>${pokemonObj.types[0]}</a></td>
// </tr>
// <tr>
//   <td><a href='https://bulbapedia.bulbagarden.net/wiki/${pokemonObj.abilities[1]}_(Ability)'>${pokemonObj.abilities[1]}</a></td>
//   <td><a href='https://bulbapedia.bulbagarden.net/wiki/${pokemonObj.types[1]}_(type)'>${pokemonObj.types[1]}</a></td>
// </tr>
