import React, { useState } from 'react';

export const SearchModal = ({ toggleModal, searchFunction }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    searchFunction(searchText);
    toggleModal();
  };

  return (
    <div className="search-modal">
      <div className="search-modal-content">
        <h2>Buscar</h2>
        <input
          type="text"
          placeholder="Buscar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Buscar
        </button>
        <button className="close-button" onClick={toggleModal}>
          Cerrar
        </button>
      </div>
    </div>
  );
};


