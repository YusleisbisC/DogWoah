import { Navbar } from './Navbar';
import { Footer } from './Footer';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { AddProductModal } from './AddProductModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../firebase';
import { AdminNav } from './AdminNav';
 // Importa el componente AdminNav

export const Registro = () => {
  const [showModal, setShowModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    console.log(user);
    if (user) {
      console.log("usuario", user.uid);
      if (user.uid === "u1eBSrG3padEmsMnfrkuV0o9MmX2") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } else {
      // El usuario no está autenticado, puedes manejar esto de acuerdo a tus necesidades.
    }
  }, [setIsAdmin]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddProduct = (formData) => {
    // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones necesarias
    console.log('Producto agregado:', formData);
    handleCloseModal();
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Aqui encontraras el listado completo de tus productos favoritos</h2>

        {/* Botón de "Agregar Producto" con icono de patita de cachorro */}
        {isAdmin && ( // Muestra el botón solo si isAdmin es true
          <Button id="agregar-producto-btn" variant="primary" onClick={handleShowModal}>
            <FontAwesomeIcon icon={faPaw} />
          </Button>
        )}

        {/* Resto de tu componente de lista de productos */}
        <AddProductModal show={showModal} onHide={handleCloseModal} onSubmit={handleAddProduct} />

        {/* Muestra AdminNav solo si el usuario es un administrador autenticado */}
        {isAdmin && <AdminNav />}
      </div>
      <Footer />
    </div>
  );
};
