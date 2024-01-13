import { LiComponent } from "./li.component";
import { SearchComponent } from "../Search/search.component";

export function NavComponent({setGen}) {

    const genList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const handlePath = (gen) => {
        setGen(gen);
    }

    return (
        <>
            <nav className="py-3 px-3 mx-auto flex justify-center items-center flex-row gap-6">
                <img src="/pokeball.png" alt="pokeball" className="w-24" />
                <ul className="flex flex-wrap py-10 px-10 w-[750px] justify-center gap-5 ">
                    {
                        genList.map(generation => {
                            return <LiComponent key={generation} generation={generation} path={() => handlePath(generation)} />
                        })
                    }
                </ul>
            </nav>
            <header className="flex justify-center">
                <h1 className="text-white text-6xl font-bold font">Pokedex</h1>
            </header>
            <section>
                <SearchComponent/>
            </section>
        </>
    )

}