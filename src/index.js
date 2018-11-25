document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
})

let searchForm = document.getElementById("pokemon-search-form")
let container = document.querySelector("#container")
let pokemonContainer = document.querySelector("#pokemon-container")

let pokemonArray = Array.from(POKEMON)
pokemonContainer.children[1].remove()
pokemonArray.forEach(pokemonDisplay)

searchForm.addEventListener("keyup", function(event) {
  let search = document.getElementById("pokemon-search-input").value
  let filtered = []
  filtered = POKEMON.filter(function(pokemon) {
    return pokemon.name.includes(search)
  })
  displayClear()
  filtered.forEach(pokemonDisplay)
  if (filtered.length < 1) {
    let noPokemon = document.createElement("center")
    noPokemon.innerHTML = "There are no Pokémon here"
    pokemonContainer.appendChild(document.createElement("p"))
    pokemonContainer.appendChild(noPokemon)
    pokemonContainer.appendChild(document.createElement("p"))
  }

})

// To Remove All Pokemon
function displayClear() {
  pokemonContainer.remove()
  pokemonContainer = document.createElement("div")
  pokemonContainer.id = "pokemon-container"
  container.appendChild(pokemonContainer)
}

function pokemonDisplay(pokemon) {
  // DIV Pokemon Container - 1st level
  let divElement = document.createElement("div")
  divElement.classList.add("pokemon-container");
  pokemonContainer.appendChild(divElement)

  // 2nd Level
  let divStyle = document.createElement("div")
  divStyle.classList.add("pokemon-frame");
  divStyle.setAttribute("style", "width:230px;margin:10px;background:#fecd2f;color:#2d72fc")
  divElement.appendChild(divStyle)

  // 3rd Level
  let h1Element = document.createElement("h1")
  h1Element.classList.add("center-text")
  h1Element.innerHTML = pokemon.name
  divStyle.appendChild(h1Element)
  let divStyle2 = document.createElement("div")
  divStyle2.setAttribute("style", "width:239px;margin:auto")
  divStyle.appendChild(divStyle2)

  // 4th Level
  let divStyle3 = document.createElement("div")
  divStyle3.setAttribute("style", "width:96px;margin:auto")
  divStyle2.appendChild(divStyle3)

  // 5th Level
  let img = document.createElement("img")
  img.setAttribute("data-id", pokemon.id)
  img.setAttribute("data-action", "flip")
  img.setAttribute("class", "toggle-sprite")
  img.setAttribute("src", pokemon.sprites["front"])
  img.flipped = false
  img.addEventListener("click", function(event) {
    if (img.flipped) {
      img.flipped = false
      img.setAttribute("src",pokemon.sprites["front"])
    } else {
      img.flipped = true
      img.setAttribute("src",pokemon.sprites["back"])
    }
  })
  divStyle3.appendChild(img)
}



// Deliverables:
// AS A BONUS, add a way to show users details for a particular pokemon: moves, abilities, etc.
