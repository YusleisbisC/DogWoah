import React, { useState } from 'react';
import './SearchModal.css';
import { useNavigate } from 'react-router-dom';

export const SearchModal = ({ toggleModal }) => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate(); // Obtén la función de navegación de React Router

  const handleSearch = () => {
    // Realiza la búsqueda y navega a la URL con los parámetros de búsqueda
    const queryParams = new URLSearchParams();
    queryParams.set('search', searchText);
    navigate(`/productos?${queryParams.toString()}`);
    toggleModal(); // Cierra el modal después de realizar la búsqueda
  };

  return (
    <div className="search-modal">
      <div className="search-modal-content">
        <h2>Buscar</h2>
        {/* Utiliza el estado searchText para el input */}
        <input
          type="text"
          placeholder="Buscar receitas"
          className="input-search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* Agrega un botón de búsqueda que llame a handleSearch */}
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
