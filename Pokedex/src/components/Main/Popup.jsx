import React from "react";

export function Popup({ pokemonData, onClose }) {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-zinc-600 rounded-3xl text-white p-8">
                <h2 className="text-2xl font-bold mb-4 text-center">{pokemonData.name}</h2>
                <div className="grid grid-cols-2 gap-4">
                    {pokemonData.stats?.map((pokemonStats) => (
                        <div className="mb-4" key={pokemonStats.stat.name}>
                            <label className="block text-white">
                                {pokemonStats.stat.name}
                            </label>
                            <div className="flex items-center w-60">
                                <div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500"></div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div class="bg-blue-600 h-2.5 rounded-full" style={{width: `${pokemonStats.base_stat}px`}}></div>
                                </div>
                                <div className="ms-2">
                                    <span className="text-white">{pokemonStats.base_stat}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out" onClick={onClose}>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}
