import { PokemonComponent } from "./pokemon.component";

export function MainComponent ({pokemonList}) {
    return (
        <PokemonComponent pokemonList={pokemonList}/>
    )
}