import { useEffect } from "react";
import { useState } from "react";
import { searchPokemon, searchPokemonData } from "../../services/pokemons";
import { Popup } from "./Popup";

export function PokemonDetails({ url }) {
    const [pokemon, setPokemon] = useState(null);
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const handleClick = async (id) => {

        const pokemonResultData = await searchPokemonData(id);
        setSelectedPokemon(pokemonResultData);
        setPopupOpen(true);

    }

    const onClose = () => {
        setPopupOpen(false);
    }

    useEffect(() => {
        
        const fetchPokemonData = async () => {
            const pokemonData = await searchPokemon(url);
            setPokemon(pokemonData);
        }
        fetchPokemonData();

    }, [url]);

    if (!pokemon) {
        return null;
    }

    return (
        <>
            <section onClick={() => handleClick(pokemon.id)} className="bg-zinc-600 rounded-lg w-52 mx-auto">
                <p className="text-white text-2xl p-2">#{pokemon.id}</p>
                <div className="flex justify-center">
                    <img className="size-36" src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <div className="flex justify-center">
                    <p className="text-white text-2xl">{pokemon.name}</p>
                </div>
            </section>
            {
                popupOpen && <Popup pokemonData={selectedPokemon} onClose={onClose} />
            }
        </>
    )
}