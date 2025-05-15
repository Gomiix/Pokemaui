import { fetchPokemons } from './pokemonFetch';

export const fetchPokemonByType = async (typeId) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${typeId}`);
    if (!response.ok)
      throw new Error('Error al obtener los pokemons del tipo seleccionado');
    const data = await response.json();

    const allOfType = data.pokemon.map((entry) => entry.pokemon);
    const firstGeneration = await fetchPokemons();

    const filteredType = firstGeneration.filter((poke) =>
      allOfType.some((entry) => entry.name === poke.name)
    );

    return filteredType;
  } catch (error) {
    console.error('Error al hacer el fetch de tipos de pokemon:', error);
    return [];
  }
};
