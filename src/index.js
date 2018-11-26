document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  loadPokemon()

  document.querySelector('#pokemon-search-input').addEventListener(
    'keyup', filterPokemon)


  function getGallery() {
    return document.querySelector('#pokemon-container')
  }

  function loadPokemon() {
    for (let poke of POKEMON) {
      let divElement = document.createElement('div')

      divElement.id = `${poke.name}`
      divElement.classList.add('pokemon-container')

      divElement.innerHTML = `
        <div class='pokemon-frame'>
          <h1 class='center-text'>${poke.name}</h1>
          <div style='width:239px;margin:auto'>
            <div style='width:96px;margin:auto'>
              <img data-id='${poke.id}' data-action='flip' src='${poke.sprites.front}'>
            </div>
          </div>
        </div>
      `

      divElement.addEventListener('click', flip)

      getGallery().appendChild(divElement)
    }

  }

  function filterPokemon() {
    search = document.querySelector('#pokemon-search-input').value

    let show = POKEMON.filter(function(poke) {
      return poke.name.includes(search)
    })

    let hide = found = POKEMON.filter(function(poke) {
      return !poke.name.includes(search)
    })


    if (show.length === 0 && document.getElementById('empty-search') === null) {
      let emptyDiv = document.createElement('p')
      emptyDiv.id = 'empty-search'
      emptyDiv.innerHTML = '<center>There are no Pokémon here</center>'
      getGallery().appendChild(emptyDiv)
    } else if (show.length != 0 && document.getElementById('empty-search')) {
      document.getElementById('empty-search').parentNode.removeChild(document.getElementById('empty-search'))
    }

    for (let poke of hide) {
      document.getElementById(`${poke.name}`).classList.add('hide')
    }

    for (let poke of show) {
      document.getElementById(`${poke.name}`).classList.remove('hide')
    }

  }

  function flip(event) {
    if (event.target.nodeName === 'IMG') {
      let pic = event.target

      let poke = POKEMON.find(function(poke) {
        return parseInt(pic.getAttribute('data-id')) === poke.id
      })

      if (pic.src === poke.sprites.front) {
        pic.src = poke.sprites.back
      } else if (pic.src === poke.sprites.back) {
        pic.src = poke.sprites.front
      }
    }
  }
})
