import React from 'react';

export const TypeFilter = ({ typeList, onTypeChange, selectedType }) => {
  console.log(typeList);
  return (
    <div className='mb-6 flex justify-center'>
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
        className='w-full max-w-md px-4 py-2 rounded-lg shadow border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-slate-300'
      >
        <option value=''>— Todos los tipos —</option>
        {typeList.map((type) => {
          const typeId = type.url.split('/').filter(Boolean).pop();
          return (
            <option
              key={type.name}
              value={typeId}
              className='bg-slate-900 border border-slate-600'
            >
              {type.name.charAt(0).toUpperCase() +
                type.name.slice(1).toLowerCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};
