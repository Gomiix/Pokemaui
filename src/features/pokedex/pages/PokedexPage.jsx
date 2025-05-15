import { useEffect, useState, useCallback, useMemo } from 'react';
import { fetchPokemons } from '../../../api/pokemonFetch';
import { fetchPokemonTypes } from '../../../api/pokemonTypes';
import { PokemonList } from '../components/PokemonList';
import { SearchBar } from '../components/SearchBar';
import { TypeFilter } from '../components/TypeFilter';
import { fetchPokemonByType } from '../../../api/pokemonByType';

export const PokedexPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeSelected, setTypeSelected] = useState('');

  const getPokemons = async () => {
    const data = await fetchPokemons();
    setPokemons(data);
  };

  const getPokemonTypes = async () => {
    const data = await fetchPokemonTypes();
    setPokemonTypes(data);
  };

  const getPokemonsByType = async () => {
    const data = await fetchPokemonByType(typeSelected);
    setPokemons(data);
  };

  useEffect(() => {
    getPokemonTypes();
  }, []);

  useEffect(() => {
    if (typeSelected) {
      getPokemonsByType();
    } else {
      getPokemons();
    }
  }, [typeSelected]);

  const filterPokemons = useCallback(
    (list) => {
      return list.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    [searchTerm]
  );

  const filteredPokemons = useMemo(
    () => filterPokemons(pokemons),
    [pokemons, filterPokemons]
  );

  return (
    <div className='p-6 min-h-screen bg-slate-800'>
      <h1 className='text-4xl font-extrabold text-center text-white mb-8 tracking-wide'>
        PokemabuiDex 💙
      </h1>

      <SearchBar searchValue={searchTerm} onSearchChange={setSearchTerm} />
      <TypeFilter
        typeList={pokemonTypes}
        onTypeChange={setTypeSelected}
        selectedType={typeSelected}
      />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
};
