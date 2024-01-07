import { useNavigate } from "react-router-dom";
import { LiComponent } from "./li.component";

export function NavComponent() {

    const genList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            <nav className="py-3 px-3 mx-auto flex justify-center items-center flex-row gap-6">
                <img src="../../../public/pokeball.png" alt="pokeball" className="w-24" />
                <ul className="flex flex-wrap py-10 px-10 w-[750px] justify-center gap-5 ">
                    {
                        genList.map(generation => {
                            return <LiComponent key={generation} generation={generation} />
                        })
                    }
                </ul>
            </nav>
            <header className="flex justify-center">
                <h1 className="text-white text-6xl font-bold font">Generacion</h1>
            </header>
        </>
    )

}