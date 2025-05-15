import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchPokemonById } from '../../../api/fetchPokemonById';
import { PokemonMoves } from '../components/PokemonMoves';

export const DetailsPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    const data = await fetchPokemonById(id);
    setPokemon(data);
  };

  useEffect(() => {
    getPokemon();
  }, [id]);

  if (!pokemon) {
    return (
      <div className='min-h-screen bg-slate-800 text-white p-6'>
        <p className='text-center'>Cargando Pokémon...</p>
      </div>
    );
  }

  const formattedTypes = pokemon.types
    .map((typeEntry) => {
      const name = typeEntry.type.name;
      return name.charAt(0).toUpperCase() + name.slice(1);
    })
    .join(', ');

  const altura = pokemon.height / 10;
  const peso = pokemon.weight / 10;

  return (
    <div className='min-h-screen bg-slate-800 text-white p-6 flex flex-col items-center'>
      <Link
        to='/'
        className='text-slate-400 hover:text-white transition text-sm mb-2'
      >
        ← Volver a la Pokédex
      </Link>

      {/* Card de Pokémon */}
      <div className='bg-slate-900 border border-slate-600 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center max-w-2xl w-full'>
        <h2 className='text-3xl font-extrabold capitalize mb-8'>
          {pokemon.name}
        </h2>

        <div className='flex gap-8 justify-center items-center mb-8'>
          <img
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name} front`}
            className='w-48 h-48'
          />
          <img
            src={pokemon.sprites.back_default}
            alt={`${pokemon.name} back`}
            className='w-48 h-48'
          />
        </div>

        <div className='space-y-3 text-slate-300 text-base text-center'>
          <p>
            <span className='font-bold text-white'>Tipo:</span> {formattedTypes}
          </p>
          <p>
            <span className='font-bold text-white'>Altura:</span> {altura} m
          </p>
          <p>
            <span className='font-bold text-white'>Peso:</span> {peso} kg
          </p>
        </div>
      </div>
      <PokemonMoves moves={pokemon.moves} />
    </div>
  );
};
