export function SearchComponent({ handleSubmit, handleChange }) {
    return (
        <>
            <section className="flex justify-center items-center py-8">
                <form className="flex flex-col items-center sm:flex-row" onSubmit={handleSubmit}>
                    <input
                        type="search"
                        name=""
                        id=""
                        className="p-2 rounded-2xl mb-2 sm:mr-2 sm:mb-0 w-full sm:w-96"
                        onChange={handleChange}
                        placeholder="Introduce el nombre del pokemon para buscar..."
                    />
                    <button
                        type="submit"
                        className="text-black p-2 bg-white px-6 sm:px-10 m-2 rounded-3xl hover:bg-gray-300 transition duration-300 ease-in-out"
                    >
                        Search
                    </button>
                </form>
            </section>
        </>
    );
}
