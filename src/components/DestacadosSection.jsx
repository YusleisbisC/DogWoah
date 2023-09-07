import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./DestacadosSection.css";

export const DestacadosSection = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productosDestacados, setProductosDestacados] = useState([]); // Aquí almacenaremos los productos destacados

  const togglePreviewModal = (product) => {
    setSelectedProduct(product);
    setShowPreviewModal(!showPreviewModal);
  };

  useEffect(() => {
    // Realiza una solicitud GET para obtener los 10 primeros productos destacados
    fetch("http://localhost:4000/productos?_limit=10") // Agrega el parámetro _limit=10 para limitar a 10 productos
      .then((response) => response.json())
      .then((data) => setProductosDestacados(data))
      .catch((error) => {
        console.error("Error al obtener productos destacados", error);
      });
  }, []);
  

  return (
    <section className="destacados-section">
      <h2>Produtos em destaque</h2>
      <div className="destacados-list">
        {productosDestacados.map((producto) => (
          <div key={producto.id} className="destacados-card">
            <Link to={`produtos/Brinquedos/${producto.categoria}`}>
              <img
                src={producto.image}
                alt={producto.nombre}
                onClick={() => togglePreviewModal(producto)}
              />
            </Link>

            <h3>{producto.name}</h3>
            <button onClick={() => togglePreviewModal(producto)}>
              Vista prévia
            </button>
          </div>
        ))}
      </div>

      <Modal show={showPreviewModal} onHide={togglePreviewModal}>
        {selectedProduct && (
          <div className="preview-modal">
            <img src={selectedProduct.image} alt={selectedProduct.nombre} />
            <h3>{selectedProduct.nombre}</h3>
            {selectedProduct.price !== undefined ? (
              <p>Preço: ${selectedProduct.price.toFixed(2)}</p>
            ) : (
              <p>Precio no disponible</p>
            )}
            <p>
              Quantidade desejada: <input type="number" />
            </p>
            <button>Adicionar ao carrinho</button>
          </div>
        )}
      </Modal>
    </section>
  );
};
