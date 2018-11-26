document.addEventListener('DOMContentLoaded', () => {
  const allPokemonData = []
  let container = document.getElementById('pokemon-container')
  const searchInput = document.getElementById('pokemon-search-input')

  // event listeners
  searchInput.addEventListener('keyup', filterPokemon)
  container.addEventListener('click', flipPokemon)
  
  getPokemonApi();

  function getPokemonApi() {
    fetch('http://localhost:3000/pokemon')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
     data.forEach(function(pokemon) {
       allPokemonData.push(pokemon)
      let pokemonCard = new Pokemon(pokemon.name, pokemon.sprites.front, pokemon.sprites.back, pokemon.id)
      pokemonCard.render(container)
     })
    });
  }

  function filterPokemon() {
    container.innerHTML = '';
    let filterList = allPokemonData.filter(pokemon => {
      return pokemon.name.includes(this.value.toLowerCase())
    });
    filterList.forEach(pokemon => {
      let filterCard = new Pokemon(pokemon.name, pokemon.sprites.front, pokemon.sprites.back, pokemon.id)
      filterCard.render(container)
    })
  }

  function flipPokemon(e) {
    if (e.target.className.includes('flip-image')) {
      let pokemonSrc = e.target.parentElement.children[1].children[0].src
      let pokemonId = e.target.parentElement.id
      let foundPokemon = allPokemonData.find(pokemon => {
        if (pokemon.id == pokemonId) {
          return pokemon;
        }
      }); 
    
      if (pokemonSrc == foundPokemon.sprites.front) {
        pokemonSrc = foundPokemon.sprites.back
        e.target.parentElement.children[1].children[0].src = pokemonSrc
      } else if (pokemonSrc == foundPokemon.sprites.back) {
        pokemonSrc = foundPokemon.sprites.front
        e.target.parentElement.children[1].children[0].src = pokemonSrc
      }
    }
  }

});

//YOUR CODE HERE
  class Pokemon {
    constructor(name, front, back, id) {
      this.name = name;
      this.front = front;
      this.back = back;
      this.id = id;
    }

    render(element) {
      
      let div = document.createElement('div');
      div.className = 'pokemon-container'
      div.innerHTML = `
      <div class="pokemon-frame" id="${this.id}">
        <h1 class="center-text">${this.name}</h1>
        <div class="${this.name}-image">
          <img src="${this.front}">
        </div>
        <p class="center-text flip-image">flip card</p>
      </div>
      `;
      element.appendChild(div)
     
    }
  }


