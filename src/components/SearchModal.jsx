import React, { useState } from 'react';
import './SearchModal.css';

export const SearchModal = ({ toggleModal, searchFunction }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    const results = searchFunction(searchText);

    if (Array.isArray(results) && results.length === 0) {
      setNoResults(true);
      setSearchResults([]); // Limpiar los resultados si no hay ninguno
    } else {
      setSearchResults(results);
      setNoResults(false);
    }
  };

  return (
    <div className="search-modal">
      <div className="search-modal-content">
        <h2>Pesquisar</h2>
        <input
          type="text"
          placeholder="Buscar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Pesquisar
        </button>
        <button className="close-button" onClick={toggleModal}>
          Fechar
        </button>

        {noResults ? (
          <p>No hubo resultados para tu búsqueda.</p>
        ) : (
          <div>
            {searchResults?.map((result, index) => (
              <p key={index}>{result}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};



