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

    fetch("http://127.0.0.1:8000/api/products")

    // Realiza una solicitud GET para obtener los 10 primeros productos destacados
    fetch("http://localhost:4000/productos?_limit=10") // Agrega el parámetro _limit=10 para limitar a 10 productos

      .then((response) => response.json())
      .then((data) => {
        if (data.products && Array.isArray(data.products)) {
          setProductosDestacados(data.products);
        } else {
          console.error(
            "La respuesta no contiene un arreglo de productos válidos."
          );
        }
      })
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
            <Link to={`produtos/${producto.category}/${producto.name}`}>
              <img
                src={`http://127.0.0.1:8000/storage/${producto.image}`} // Usar producto.image en lugar de selectedProduct.image
                alt={producto.name}
                onClick={() => togglePreviewModal(producto)}
                style={{ height: "190px", width: "230px" }}
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
            <img
              src={`http://127.0.0.1:8000/storage/${selectedProduct.image}`}
              alt={selectedProduct.name}
              style={{ height: "180px", width: "200px" }}
            />
            <h3>{selectedProduct.name}</h3>
            {selectedProduct.price !== undefined ? (
              <p>Preço: ${selectedProduct.price}</p>
            ) : (
              <p>Precio no disponible</p>
            )}
            <p>
              Quantidade desejada: <input type="number" />
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
