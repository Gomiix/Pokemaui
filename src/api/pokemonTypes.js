export const fetchPokemonTypes = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/type');
    if (!response.ok) throw new Error('Error al obtener los tipos de pokemon');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Erro al hacer el fetch de tipos de pokemon:', error);
    return [];
  }
};
