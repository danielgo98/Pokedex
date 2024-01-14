import { useState } from "react";
import { PokemonComponent } from "./pokemon.component";
import { PokemonDetailSearch } from "./pokemonDetailSearch";
import { searchPokemonData } from "../../services/pokemons";
import { SearchComponent } from "../Search/search.component";

export function MainComponent({ pokemonList }) {
    const [search, setSearch] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [showCard, setShowCard] = useState(false);

    const handleChange = async(event) => {
        event.preventDefault();
        setSearch(event.target.value);

        if (event.target.value == '') {
            setShowCard(false);
        }

    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await searchPokemonData(search.toLowerCase());
            setPokemonData(data);
            setShowCard(true);

        } catch (error) {
            console.error('Error al buscar el pokemon: ' + search);
        }

    }

    return (
        <>
            <SearchComponent handleSubmit={handleSubmit} handleChange={handleChange} />
            <PokemonDetailSearch pokemonData={pokemonData} showCard={showCard}/>
            <PokemonComponent pokemonList={pokemonList} showCard={!showCard}/>
        </>
    )
}