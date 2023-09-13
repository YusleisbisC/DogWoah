import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useCart } from "react-use-cart";
import "./Brinquedos.css";

export const BrinquedosPage = () => {
  const [productosBrinquedos, setProductosBrinquedos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const { addItem } = useCart();

  const togglePreviewModal = (product) => {
    setSelectedProduct(product);
    setShowPreviewModal(!showPreviewModal);
  };

  useEffect(() => {
    fetch("https://dogwoah-servidor-production.up.railway.app/api/products")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          // Filtrar los productos por categoría "banho"
          const productosBrinquedos = data.filter(
            (producto) => producto.category === "brinquedo"
          );

          setProductosBrinquedos(productosBrinquedos);
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
    <div>
      <Navbar />

      <div className="category-cover">
        <h2>Brinquedos</h2>
      </div>

      <div className="destacados-list">
        {productosBrinquedos.map((product) => (
          <div key={product.id} className="destacados-card">
            <Link to={`produtos/${product.category}/${product.nome}`}>
              <img
                src={product.image}
                alt={product.nome}
                onClick={() => togglePreviewModal(product)}
                style={{ height: "190px", width: "230px" }}
              />
            </Link>

            <h3>{product.nome}</h3>
            <button onClick={() => togglePreviewModal(product)}>
              Vista prévia
            </button>
          </div>
        ))}
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
      </div>
      <Footer />
    </div>
  );
};
