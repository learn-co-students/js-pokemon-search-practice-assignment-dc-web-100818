document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON);
  //YOUR CODE HERE

  let main = document.querySelector('#pokemon-container');
  makeCard(POKEMON);

  function makeCard(currentPokemon){
    currentPokemon.forEach(function(pokemon){
      let container = document.createElement('div');
        container.classList.add('pokemon-container');

      let card = document.createElement('div');
        card.setAttribute('style', 'width:230px;margin:10px;background:#fecd2f;color:#2d72fc');
        card.classList.add('pokemon-frame');

      let pokemonName = document.createElement('h1');
        pokemonName.classList.add('center-text');
        pokemonName.innerText = pokemon.name;

      let innerCard = document.createElement('div');
        innerCard.setAttribute('style', 'width:239px;margin:auto');

      let picDiv = document.createElement('div');
        picDiv.setAttribute('style', 'width:96px;margin:auto');

      let pic = document.createElement('img');
        pic.setAttribute("src", pokemon.sprites.front);
        pic.setAttribute("data-id", pokemon.id);
        pic.setAttribute("data-action", "flip");
        pic.classList.add("toggle-sprite");
        pic.addEventListener('click', flipPic);

      function flipPic(event){
        if (event.target.src === pokemon.sprites.front){
          pic.src = pokemon.sprites.back;
        } else {
          pic.src = pokemon.sprites.front;
        }
      }

      main.appendChild(container);
      container.appendChild(card);
      card.appendChild(pokemonName);
      card.appendChild(innerCard);
      innerCard.appendChild(picDiv);
      picDiv.appendChild(pic);

    })
  }

    let searchInput = document.querySelector('#pokemon-search-form')
    searchInput.addEventListener("keyup", filterPokemon)

    function filterPokemon(event){
      document.querySelector('#pokemon-container').innerHTML = ""
      let searchTerm = event.target.value
      let matchingPokemon = POKEMON.filter(pokemon => pokemon.name.includes(searchTerm.toLowerCase()))
      makeCard(matchingPokemon)
    }

  })
