import { PokemonCard } from './PokemonCard';

export const PokemonList = ({ pokemons = [] }) => {
  if (!pokemons.length) {
    return <p className='text-white text-center'>Cargando Pokémon...</p>;
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
};
