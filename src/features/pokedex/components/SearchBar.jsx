export const SearchBar = ({ searchValue, onSearchChange }) => {
  return (
    <div className='mb-6 flex justify-center'>
      <input
        type='text'
        placeholder='Busca un Pokémon...'
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className='w-full max-w-md px-4 py-2 rounded-lg text-slate-300 shadow border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
      />
    </div>
  );
};
