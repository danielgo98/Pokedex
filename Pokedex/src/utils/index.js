export function getGeneration({ generacion }) {
  let url;
  switch (generacion) {
    case 1:
      url = "https://pokeapi.co/api/v2/pokemon?limit=151";
      break;
    case 2:
      url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151";
      break;
    case 3:
      url = "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251";
      break;
    case 4:
      url = "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386";
      break;
    default:
      console.error("Generación no válida");
      url = "Generación no válida";
  }

  return url;
}
