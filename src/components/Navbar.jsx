import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import './nav.css';
import { SearchModal } from './SearchModal';


export const Navbar = () => {
  const navigate = useNavigate();
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);

  const toggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  const toggleCartModal = () => {
    navigate("/cart");
  };

  const toggleCategoriesMenu = () => {
    setShowCategoriesMenu(!showCategoriesMenu);
  };

  const yourSearchFunction = () => {
    console.log('Realizando búsqueda...');
    toggleSearchModal();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <span className="logo">DogWoah</span>
      </Link>

      <div className="ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={toggleCategoriesMenu}>
              Produtos
              <ul className={`categories-menu ${showCategoriesMenu ? 'show' : ''}`}>
                
              <li className='baño-li'>
                  <Link to="ProductList">Lista de Produtos</Link>
                </li>
                <li className='baño-li'>
                  <Link to="/produtos/Baño">Baño</Link>
                </li>
                <li className='comida-li'>
                  <Link to="/produtos/Alimentos">Alimentos</Link>
                </li>
                <li className='juegos-li'>
                  <Link to="/produtos/Brinquedos">Brinquedos</Link>
                </li>
              </ul>
            </span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contato</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/envios">Envíos</Link>
          </li>
        </ul>
      </div>
      <div className="cart-icon ml-3" onClick={toggleCartModal}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
      <div className="search-icon ml-3" onClick={toggleSearchModal}>
        <FontAwesomeIcon icon={faSearch} />
      </div>

      <Modal show={showSearchModal} onHide={toggleSearchModal}>
        <SearchModal toggleModal={toggleSearchModal} searchFunction={yourSearchFunction} />
      </Modal>
    </nav>
  );
};
