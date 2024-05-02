import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';

const SearchBar = () => {
  const { handleSearch } = useContext(TodoContext);

  const handleInputChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="p-2 bg-gray-100 rounded-lg shadow-md">
      <input
        className="w-full h-10 px-4 text-sm rounded-md outline-none"
        type="text"
        placeholder="Search todos..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
