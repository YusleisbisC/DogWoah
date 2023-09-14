import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./DestacadosSection.css";
import { useCart } from "react-use-cart";

export const DestacadosSection = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productosDestacados, setProductosDestacados] = useState([]);
  const { addItem } = useCart();

  const togglePreviewModal = (product) => {
    setSelectedProduct(product);
    setShowPreviewModal(!showPreviewModal);
  };

  useEffect(() => {
    fetch("https://dogwoah-servidor-production.up.railway.app/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProductosDestacados(data);
      })
      .catch((error) => {
        console.error("Error al obtener productos destacados", error);
      });
  }, []);

  return (
    <section className="destacados-section">
      <h2>Produtos em destaque</h2>
      <div className="destacados-list">
        {productosDestacados.reverse().map((producto) => (
          <div key={producto.id} className="destacados-card">
            <Link to={`produtos/${producto.category}/${producto.id}`}>
              <img
                src={producto.image}
                alt={producto.nome}
                onClick={() => togglePreviewModal(producto)}
                style={{ height: "190px", width: "230px" }}
              />
            </Link>

            <h3>{producto.nome}</h3>
            <button onClick={() => togglePreviewModal(producto)}>
              Vista prévia
            </button>
          </div>
        ))}
      </div>

      <Modal show={showPreviewModal} onHide={togglePreviewModal}>
        {selectedProduct && (
          <div className="preview-modal">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.nome}
              style={{ height: "180px", width: "200px" }}
            />
            <h3>{selectedProduct.nome}</h3>
            {selectedProduct.price !== undefined ? (
              <p>Preço: ${selectedProduct.price}</p>
            ) : (
              <p>Precio no disponible</p>
            )}
            <p>
              Quantidade desejada: <input type="number" min="1" />
            </p>
            <button
              onClick={() =>
                addItem({
                  ...selectedProduct,
                  totalPrice: selectedProduct.price,
                })
              }
            >
              Adicionar ao carrinho
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};
