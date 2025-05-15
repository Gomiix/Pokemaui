import { useState } from 'react';

export const PokemonMoves = ({ moves }) => {
  const movesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(moves.length / movesPerPage);
  const startIndex = (currentPage - 1) * movesPerPage;
  const displayedMoves = moves.slice(startIndex, startIndex + movesPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className='mt-10 bg-slate-800 border border-slate-700 rounded-xl p-6 w-full max-w-2xl'>
      <h3 className='text-xl font-bold text-white mb-6 text-center'>
        Movimientos que puede aprender
      </h3>

      <ul className='grid grid-cols-2 gap-4 justify-center mb-6'>
        {displayedMoves.map((move) => {
          const name =
            move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1);

          const levelInfo = move.version_group_details.find(
            (detail) => detail.move_learn_method.name === 'level-up'
          );

          const level = levelInfo?.level_learned_at;

          return (
            <li
              key={move.move.name}
              className='bg-slate-700 text-white px-4 py-2 rounded-md text-center text-sm capitalize w-full max-w-[180px] mx-auto shadow'
            >
              {name}
              {levelInfo && level > 0 ? (
                <span className='block text-slate-400 text-xs mt-1'>
                  Nivel {level}
                </span>
              ) : (
                <span className='block text-slate-400 text-xs mt-1'>
                  No se aprende por nivel
                </span>
              )}
            </li>
          );
        })}
      </ul>

      <div className='flex flex-col items-center gap-2'>
        <div className='text-sm text-slate-400'>
          Página {currentPage} de {totalPages}
        </div>

        <div className='flex justify-center gap-4'>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className='px-4 py-2 bg-slate-700 text-white rounded-md transition hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed'
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className='px-4 py-2 bg-slate-700 text-white rounded-md transition hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed'
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};
