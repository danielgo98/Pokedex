import { PokemonDetails } from "./pokemonDetail";

function ListOfPokemon ({pokemonList}) {

    console.log(pokemonList);
    return (
        <ul className="list-none w-full gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {
                pokemonList?.map(pokemon => (
                    <li key={pokemon.name}>
                        <PokemonDetails url={pokemon.url}/>
                    </li>
                ))
            }
        </ul>
    )
}

function NoPokemonList () {
    return (
        <>
            <p className="text-white">Sin resultados</p>
        </>
    )
}


export function PokemonComponent({ pokemonList }) {
    const hasPokemon = pokemonList == null ? 'Error leyendo pokemon' : pokemonList.length > 0;
    return (
        <>
        {
            hasPokemon ? <ListOfPokemon pokemonList={pokemonList}/> : <NoPokemonList/> 
        }
        </>
    )
}
