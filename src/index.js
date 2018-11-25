document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE

  const test = POKEMON[0];

  let allPokemon = POKEMON;

  let cardFront = true;

  const pokemonContainer = document.querySelector('#pokemon-container');

  const noPokemon = pokemonContainer.querySelector('center');
  pokemonContainer.removeChild(noPokemon);

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
      eachPokemonContainer.class = "pokemon-container";
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
    for (let pokemon of allPokemon) {
      displayOnePokemon(pokemon);
    }
  }

  function displayOnePokemon(pokemon) {
    createElementsForEachPokemon(pokemon);
    // appendElementsForEachPokemon(pokemon);
    // addStylingToPokemonElements(pokemon);
    // displayPokemonCard(pokemon);
  }

  displayAllPokemon();
  // const form = document.querySelector('form');
  // const imgContainer = document.querySelector('.img-container');
  //
  // form.addEventListener('keyup', displayPokemon);

  //
  // let cardFront = true;
  //
  // function catchPokemon() {
  //   input = document.querySelector('#pokemon-search-input').value;
  //   return POKEMON.filter(function(pokemon) { return pokemon.name === input });
  // }
  //
  // function displayPokemon() {
  //   displayPokemonName();
  //   displayPokemonCard();
  // }
  //
  // function displayPokemonName() {
  //   let foundPokemon = catchPokemon();
  //   pokemonName = document.createElement('h1');
  //   pokemonContainer.appendChild(pokemonName);
  //   pokemonName.innerText = `${foundPokemon[0]['name']}`;
  // }
  //
  // function displayPokemonCard() {
  //   foundPokemon = catchPokemon();
  //   pokemonCard = document.createElement('img');
  //   imgContainer.appendChild(pokemonCard);
  //
  //   }
  // }
  //

})
