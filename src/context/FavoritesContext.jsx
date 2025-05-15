import { createContext, useState, useContext, useEffect } from 'react';

// 1. Crear el contexto vacío
const FavoritesContext = createContext();

// 2. Crear el componente proveedor
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('pokemabui_favs');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('pokemabui_favs', JSON.stringify(favorites));
  }, [favorites]);

  // Función para añadir o quitar un favorito
  const toggleFavorite = (pokemonId) => {
    setFavorites((previousList) =>
      previousList.includes(pokemonId)
        ? previousList.filter((id) => id !== pokemonId)
        : [...previousList, pokemonId]
    );
  };

  const isFavorite = (pokemonId) => favorites.includes(pokemonId);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext };
