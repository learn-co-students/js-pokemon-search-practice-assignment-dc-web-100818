document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE

  // let allPokemon = POKEMON;

  let cardFront = true;

  //The pokemonContainer will be the parent container for all of the individual Pokemon displays
  const pokemonContainer = document.querySelector('#pokemon-container');

  const noPokemon = pokemonContainer.querySelector('center');
  pokemonContainer.removeChild(noPokemon);

  //Adding an event listener to form, this listener will call on the displayAllPokemon function which will dynamically change what is store in allPokemon to filter through user searches
  const form = document.querySelector('form');
  form.addEventListener('keyup', displayAllPokemon);

  function createElementsForEachPokemon(pokemon) {
    let eachPokemonContainer = document.createElement('div');
    let firstStyleDiv = document.createElement('div')
    let pokemonName = document.createElement('h1');
    let secondStyleDiv = document.createElement('div');
    let thirdStyleDiv = document.createElement('div');
    let imgTag = document.createElement('img');
    imgTag.addEventListener('click', changeCardView);

    //Making room for all of the other functions that require these nodes that were just created...

    function appendElementsForEachPokemon(pokemon) {
      pokemonContainer.appendChild(eachPokemonContainer);
      eachPokemonContainer.appendChild(firstStyleDiv);
      firstStyleDiv.appendChild(pokemonName);
      firstStyleDiv.appendChild(secondStyleDiv);
      secondStyleDiv.appendChild(thirdStyleDiv);
      thirdStyleDiv.appendChild(imgTag);
    }

    function addStylingToPokemonElements(pokemon) {
      eachPokemonContainer.classList.add("pokemon-container");
      firstStyleDiv.style = "width:230px;margin:10px;background:#fecd2f;color:#2d72fc";
      firstStyleDiv.classList.add("pokemon-frame");
      pokemonName.classList.add("center-text");
      pokemonName.innerText = `${pokemon['name']}`;
      secondStyleDiv.style = "width:239px;margin:auto";
      thirdStyleDiv.style = "width:96px;margin:auto";
      thirdStyleDiv.classList.add("center-text");
    }

    function displayPokemonCard(pokemon) {
      if (cardFront === true) {
          imgTag.src = pokemon['sprites']['front'];
        } else {
          imgTag.src = pokemon['sprites']['back']
      }
    }

    function changeCardView(event) {
      cardFront = !cardFront;
      if (cardFront === true) {
        imgTag.src = pokemon['sprites']['front'];
      } else {
        imgTag.src = pokemon['sprites']['back']
      }
    }

    //call the nested functions here...
    appendElementsForEachPokemon(pokemon);
    addStylingToPokemonElements(pokemon);
    displayPokemonCard(pokemon);
  }

  function displayAllPokemon() {
    input = document.querySelector('#pokemon-search-input').value;
    if (input !== "") {
      allPokemon = POKEMON.filter(function(pokemon) {
        return pokemon.name.split("").includes(input) });
      console.log(input);
    } else {
      allPokemon = POKEMON;
    }
    for (pokemon of allPokemon) {
      displayOnePokemon(pokemon);
    }
  }

  function displayOnePokemon(pokemon) {
    createElementsForEachPokemon(pokemon);
  }

  // displayAllPokemon();
})
