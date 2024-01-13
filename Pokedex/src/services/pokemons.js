export const searchPokemon = async (url) => {
    try {
        const response = await fetch(url);
        const pokemonDataList = await response.json();
        return pokemonDataList;
    } catch (error) {
        throw new Error('Error searching Pokemon');
    }
}

export const searchPokemonResults = async (url) => {
    try {
        const response = await fetch(url);
        const pokemonDataList = await response.json();
        return pokemonDataList.results;
    } catch (error) {
        throw new Error('Error searching Pokemon');
    }
}

export const searchPokemonData = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const pokemonDataList = await response.json();
        return pokemonDataList;
    } catch (error) {
        throw new Error('Error searching Pokemon');
    }
}