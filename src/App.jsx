import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PokedexPage } from './features/pokedex/pages/PokedexPage';
import { DetailsPage } from './features/pokemonDetails/pages/DetailsPage';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  const [pokemons, setPokemons] = useState([]);

  return (
    <>
      <FavoritesProvider>
        <Routes>
          <Route path='/' element={<PokedexPage />} />
          <Route path='/pokemon/:id' element={<DetailsPage />} />
        </Routes>
      </FavoritesProvider>
    </>
  );
}

export default App;
