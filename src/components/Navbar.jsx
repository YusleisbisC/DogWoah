import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [showAddItemAnimation, setShowAddItemAnimation] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const closeSearch = () => {
    setSearchVisible(false);
  };

  const handleAddToCart = () => {
    // Simulamos agregar un producto al carrito
    setCartItemCount(cartItemCount + 1);
    setShowAddItemAnimation(true);

    // Después de un tiempo, ocultamos la animación
    setTimeout(() => {
      setShowAddItemAnimation(false);
    }, 1000); // Por ejemplo, después de 1 segundo
  };

  return (
    <nav className="bg-body-tertiary">
      <container className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">DogWoah</Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Home">Home</Link>
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
        <div className="cart-icon ml-3" onClick={handleAddToCart}>
          <i className="fas fa-shopping-cart fa-lg"></i>
          {cartItemCount > 0 && <span className="cart-count">+{cartItemCount}</span>}
          {showAddItemAnimation && <div className="add-item-animation">+1</div>}
        </div>
        {isSearchVisible ? (
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Buscar"
              className="search-input"
              onBlur={closeSearch}
            />
          </div>
        ) : (
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon"
            onClick={toggleSearch}
          />
        )}
      </container>
    </nav>
  );
};
