
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import "./nav.css";
import { SearchModal } from "./SearchModal";
import { Auth } from "./Auth"; // Importa el componente de autenticación
import { useCart } from "react-use-cart";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import './nav.css';
import { SearchModal } from './SearchModal';
import { Auth } from './Auth';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


export const Navbar = () => {
  const navigate = useNavigate();
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false); // Controla la visibilidad del modal de inicio de sesión
  const { totalUniqueItems } = useCart();

  const toggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };
  const yourSearchFunction = () => {
    console.log('Realizando búsqueda...');
    toggleSearchModal();
  };


  const toggleCartModal = () => {
    navigate("/cart");
  };

  const toggleCategoriesMenu = () => {
    setShowCategoriesMenu(!showCategoriesMenu);
  };

  const toggleAuthModal = () => {
    setShowAuthModal(!showAuthModal);
   
  };

  const yourSearchFunction = () => {
    console.log("Realizando búsqueda...");
    toggleSearchModal();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="logo">DogWoah</span>
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={toggleCategoriesMenu}>
              Produtos
              <ul
                className={`categories-menu ${
                  showCategoriesMenu ? "show" : ""
                }`}
              >
                <li className="baño-li">
                  <Link to="ProductList">Lista de Produtos</Link>
                </li>
                <li className="baño-li">
                  <Link to="/produtos/banho">Banho</Link>
                </li>
                <li className="comida-li">
                  <Link to="/produtos/alimento">Alimentos</Link>
                </li>
                <li className="juegos-li">
                  <Link to="/produtos/brinquedo">Brinquedos</Link>
                </li>
              </ul>
            </span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contato
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/envios">
              Envíos
            </Link>
          </li>
          <li className="nav-item">
            <div className="search-icon" onClick={toggleSearchModal}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </li>
          <li className="nav-item">
            <div className="cart-icon" onClick={toggleCartModal}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span style={{ fontSize: "16px" }}>{totalUniqueItems}</span>
            </div>
          </li>
          <li className="nav-item">
            <div className="auth-icon" onClick={toggleAuthModal}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </li>
        </ul>

  
  const handleLogout = async () => {
    try {
      await signOut(auth); // Cierra la sesión del usuario
      setShowAuthModal(false); // Cierra el modal de inicio de sesión
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
    
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div className="navbar-icons" style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
        <div className="search-icon" onClick={toggleSearchModal}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="cart-icon" onClick={toggleCartModal}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <Dropdown show={showAuthModal} onToggle={toggleAuthModal}>
          <Dropdown.Toggle as="div" className="auth-icon">
            <FontAwesomeIcon icon={faUser} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={handleLogout}>Cerrar Sesión</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div style={{ width: "100%" }}>
        <div className="container" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
          <Link className="navbar-brand" to="/">
            <span className="logo">DogWoah</span>
          </Link>
          <ul className="navbar-nav ml-auto" >
            <li className="nav-item">
              <Link className="nav-link" to="/AdminNavbar/">Administrador</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item"  >
              <Dropdown  show={showCategoriesMenu} onToggle={toggleCategoriesMenu} >
                <Dropdown.Toggle as="span" className="nav-link">
                  <Link style={{textDecoration:"none"}}  to="/productos/">Produtos</Link >
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className="nav-link">
                    <Link style={{textDecoration:"none"}} to="/produtos/Baño">Baño</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="nav-link">
                    <Link style={{textDecoration:"none"}} to="/produtos/Alimentos">Alimentos</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="nav-link">
                    <Link  style={{textDecoration:"none"}} to="/produtos/Brinquedos">Brinquedos</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contato</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/envios">Envíos</Link>
            </li>
            
          </ul>
        </div>

      </div>
      <Modal show={showSearchModal} onHide={toggleSearchModal}>
        <SearchModal
          toggleModal={toggleSearchModal}
          searchFunction={yourSearchFunction}
        />
      </Modal>

      <Modal show={showAuthModal} onHide={toggleAuthModal}>
        <Auth /> {/* Agrega tu componente de inicio de sesión aquí */}
      </Modal>
        


    </nav>
  );
};
