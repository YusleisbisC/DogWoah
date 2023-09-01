import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import './DestacadosSection.css';

const productosDestacados = [
  {
    id: 1,
    nombre: 'Producto 1',
    precio: 19.99,
    imagen: 'ruta/imagen1.jpg',
    categoria: 'baño',
  },
  {
    id: 2,
    nombre: 'Producto 2',
    precio: 24.99,
    imagen: 'ruta/imagen2.jpg',
    categoria: 'alimentos',
  },

  {
    id: 2,
    nombre: 'Producto 2',
    precio: 24.99,
    imagen: 'ruta/imagen2.jpg',
    categoria: 'alimentos',
  },

  {
    id: 2,
    nombre: 'Producto 2',
    precio: 24.99,
    imagen: 'ruta/imagen2.jpg',
    categoria: 'alimentos',
  },
  // Agrega más productos destacados aquí con categorías diferentes
];

export const DestacadosSection = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const togglePreviewModal = (product) => {
    setSelectedProduct(product);
    setShowPreviewModal(!showPreviewModal);
  };

  return (
    <section className="destacados-section">
      <h2>Produtos em destaque</h2>
      <div className="destacados-list">
        {productosDestacados.map((producto) => (
          <div key={producto.id} className="destacados-card">
            <Link to={`produtos/Brinquedos/${producto.categoria}`}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                onClick={() => togglePreviewModal(producto)}
              />
            </Link>
            
            

            
            <h3>{producto.nombre}</h3>
            <button onClick={() => togglePreviewModal(producto)}>
            Vista prévia
            </button>
          </div>
        ))}
      </div>

      <Modal show={showPreviewModal} onHide={togglePreviewModal}>
        {selectedProduct && (
          <div className="preview-modal">
            <img src={selectedProduct.imagen} alt={selectedProduct.nombre} />
            <h3>{selectedProduct.nombre}</h3>
            <p>Preço: ${selectedProduct.precio.toFixed(2)}</p>
            <p>Quantidade desejada: <input type="number" /></p>
            <button>Adicionar ao carrinho</button>
          </div>
        )}
      </Modal>
    </section>
  );
};