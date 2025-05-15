import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { FavoritesContext } from '../../../context/FavoritesContext';
import { useContext } from 'react';

export const PokemonCard = ({ name, url }) => {
  const id = url.split('/').filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

  const favorito = isFavorite(id);

  return (
    <div className='relative bg-slate-900 border border-slate-600 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center'>
      <button
        onClick={() => toggleFavorite(id)}
        className='absolute top-2 right-2 text-slate-400 hover:text-yellow-400 transition z-10'
      >
        <Star
          size={24}
          fill={favorito ? '#facc15' : '#5e5e5e'}
          stroke={favorito ? '#facc15' : '#5e5e5e'}
        />
      </button>

      <Link to={`/pokemon/${id}`} className='flex flex-col items-center'>
        <img src={imageUrl} alt={name} className='w-60 h-60 mb-3' />
        <p className='text-xl capitalize font-semibold text-slate-400'>
          {name}
        </p>
      </Link>
    </div>
  );
};
