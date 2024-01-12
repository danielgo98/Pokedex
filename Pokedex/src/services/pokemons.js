export const searchPokemon = async (url) => {
    try {
        const response = await fetch(url);
        const pokemonDataList = await response.json();// Agrega esta línea para imprimir la lista de Pokémon
        return pokemonDataList;
    } catch (error) {
        throw new Error('Error searching Pokemon');
    }
}

export const searchPokemonResults = async (url) => {
    try {
        const response = await fetch(url);
        const pokemonDataList = await response.json();// Agrega esta línea para imprimir la lista de Pokémon
        return pokemonDataList.results;
    } catch (error) {
        throw new Error('Error searching Pokemon');
    }
}