import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';

import {SearchModal} from './SearchModal';




export const Navbar = () => {
  const navigate = useNavigate()
  const [showSearchModal, setShowSearchModal] = useState(false);
  


  const toggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  const toggleCartModal = () => {
    navigate("/cart")
  };

  const yourSearchFunction = () => {
    console.log('Realizando búsqueda...');
    toggleSearchModal();
  };

 

  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">DogWoah</Link>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos">Productos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
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
