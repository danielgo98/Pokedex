import { LiComponent } from "./li.component";

export function NavComponent({ setGen }) {
    const genList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const handlePath = (gen) => {
        setGen(gen);
    };

    return (
        <>
            <nav className="py-3 px-3 mx-auto flex justify-center items-center flex-col gap-6">
                <img src="/pokeball.png" alt="pokeball" className="w-24" />
                <ul className="flex flex-wrap py-2 md:py-10 px-2 md:px-10 w-full md:w-[750px] justify-center gap-1">
                    {genList.map((generation) => (
                        <LiComponent key={generation} generation={generation} path={() => handlePath(generation)} />
                    ))}
                </ul>
            </nav>
            <header className="flex justify-center">
                <h1 className="text-white text-6xl font-bold font">Pokedex</h1>
            </header>
        </>
    );
}
