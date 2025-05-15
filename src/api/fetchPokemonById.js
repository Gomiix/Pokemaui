export const fetchPokemonById = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok)
      throw new Error('Error al obtener el pokemon seleccionado');
    const data = await response.json();
    return data;
  } catch {
    console.error('Error al obtener los detalles del pokemon', error);
    return null;
  }
};
