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
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          // Filtrar los productos por categoría
          const productosBanho = data.filter(
            (producto) => producto.categoria === "banho"
          );
          const productosAlimento = data.filter(
            (producto) => producto.categoria === "alimento"
          );
          const productosBrinquedo = data.filter(
            (producto) => producto.categoria === "brinquedo"
          );

          // Seleccionar 10 productos aleatorios de cada categoría
          const productosDestacados = [
            ...selectRandomProducts(productosBanho, 5),
            ...selectRandomProducts(productosAlimento, 5),
            ...selectRandomProducts(productosBrinquedo, 5),
          ];

          setProductosDestacados(productosDestacados);
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

  // Función para seleccionar productos aleatorios de una categoría
  const selectRandomProducts = (products, count) => {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count);
  };

  return (
    <section className="destacados-section">
      <h2>Produtos em destaque</h2>
      <div className="destacados-list">
        {productosDestacados.map((producto) => (
          <div key={producto.id} className="destacados-card">
            <Link to={`produtos/${producto.category}/${producto.name}`}>
              <img
                src={producto.imagem}
                alt={producto.nome}
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
              src={selectedProduct.imagem}
              alt={selectedProduct.nome}
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
