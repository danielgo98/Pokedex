export function LiComponent({ generation, path}) {

    return (
        <li className="w-28">
            <button onClick={path} className="text-secondaryColor bg-zinc-700 p-7 m-1 rounded-3xl font-bold hover:bg-zinc-600 transition duration-300 ease-in-out">
                Gen {generation}
            </button>
        </li>
    )

}