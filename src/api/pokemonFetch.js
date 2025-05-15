export const fetchPokemons = async () => {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    );
    if (!response.ok) throw new Error('Error al obtener los Pokémon');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error al hacer la request de los pokemons: ', error);
    return [];
  }
};
