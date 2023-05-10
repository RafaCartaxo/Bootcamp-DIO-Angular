

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
                    <span class="number">${pokemon.order}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail"> 
                        <ol class="types">
                            <li class="type">grass</li>
                            <li class="type">poison</li>

                        </ol>
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" 
                        alt="${pokemon.name}">
                    </div>

        </li>
    `
    
}

const pokemonList = document.getElementById('pokemonList')


pokeApi.getPokemons().then((pokemons) => {
    const listItems = []

for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItems.push(convertPokemonToLi(pokemon))

    }
    console.log(listItems)
})
