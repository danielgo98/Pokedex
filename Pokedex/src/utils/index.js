export function getGeneration(generacion) {
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
    case 5:
      url = "https://pokeapi.co/api/v2/pokemon?limit=156&offset=493";
      break;
    case 6:
      url = "https://pokeapi.co/api/v2/pokemon?limit=72&offset=649";
      break;
    case 7:
      url = "https://pokeapi.co/api/v2/pokemon?limit=88&offset=721";
      break;
    case 8:
      url = "https://pokeapi.co/api/v2/pokemon?limit=96&offset=809";
      break;
    case 9:
      url = "https://pokeapi.co/api/v2/pokemon?limit=120&offset=905";
      break;
    default:
      console.error("Generación no válida");
      url = "Generación no válida";
  }

  return url;
}
