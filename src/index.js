document.addEventListener('DOMContentLoaded', () => {
   //creates html
  const pokeMonCardHTML = POKEMON.map(pObj => (

  	`<div class="pokemon-container">
  	  <div style="width:200px;margin:10px;background:#yellow;color:#2d72fc" class="pokemon-frame">
  	   <h1 class="center-text">${pObj.name}</h1>
  	    <div style="width:200px;margin:auto">
  	     <img data-id="{pObj.id}" data-action="flip" class="toggle-sprite" src="${pObj.sprites.front}">
  	     </div>
  	    </div>
  	    </div>
  	   </div>`
  	 )).join('')

  	document.getElementById('pokemon-container').innerHTML = pokeMonCardHTML

   document.getElementById('pokemon-container').addEventListener('click', event => {
    if (event.target.dataset.action === 'flip') {
      const targetPoke = POKEMON.find(pObj => pObj.id == event.target.dataset.id)
      if (event.target.src === targetPoke.sprites.front) {
        event.target.src = targetPoke.sprites.back
      } else {
        event.target.src = targetPoke.sprites.front
      }
    }
  })

  	document.getElementById('pokemon-search-form').addEventListener('input', event => {
    const filterPokes = POKEMON.filter(pObj => pObj.name.includes(event.target.value.toLowerCase()))
    const filterPokeHTML = filterPokes.map(pObj => (
      `<div class="pokemon-container">
        <div style="width:200px;margin:10px;background:#yellow;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${pObj.name}</h1>
          <div style="width:200px;margin:auto">
            <div style="width:90px;margin:auto">
              <img data-id="${pObj.id}" data-action="flip" class="toggle-sprite" src="${pObj.sprites.front}">
            </div>
          </div>
        </div>
      </div>`
      )).join('')

    document.getElementById('pokemon-container').innerHTML = filterPokeHTML.length ? filterPokeHTML : `<p><center>Now there are pokemon</center></p>`
  })
})









  	
