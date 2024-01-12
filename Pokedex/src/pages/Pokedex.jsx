import { useEffect, useState } from "react";
import { MainComponent } from "../components/Main/main.component";
import { NavComponent } from "../components/Nav/nav.component";
import { getGeneration } from "../utils";
import { searchPokemonResults } from "../services/pokemons";

export function Pokedex() {
    const [gen, setGen] = useState(1);
    const finalGeneration = getGeneration(gen);

    const [results, setResults] = useState(null);

    useEffect(() => {

        const fetchResults = async () => {
            const pokemonResults = await searchPokemonResults(finalGeneration);
            setResults(pokemonResults);
        };

        fetchResults();
    }, [gen])

    // const finalGenerationResults = searchPokemonResults(finalGeneration);

    return (
        <>
            <NavComponent setGen={setGen}/>
            <MainComponent pokemonList={results}/>
        </>

    )

}