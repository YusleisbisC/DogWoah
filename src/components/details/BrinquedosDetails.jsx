import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import "./BrinquedosDetails.css";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const BrinquedosDetails = () => {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [product, setProduct] = useState(null); // Estado para el producto seleccionado
  const { addItem } = useCart();

  useEffect(() => {
    fetch("https://dogwoah-servidor-production.up.railway.app/api/products")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setProductosDestacados(data);
          console.log(data[0]);
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

  const params = useParams();

  useEffect(() => {
    // Busca el producto correspondiente a través del parámetro 'name'
    const selectedProduct = productosDestacados.find(
      (product) => product.id === params.id
    );
    setProduct(selectedProduct);
  }, [params.id, productosDestacados]);

  return (
    <div>
      <Navbar />
      <div>
        <h2>Brinquedos</h2>
      </div>
      {product ? ( // Verifica si product está definido
        <div className="card-details">
          <div>
            <div>
              <img
                src={product.image}
                alt={product.nome}
              />
            </div>
            <div>
              <h2>{product.name}</h2>
              <span className="price">${product.price}</span>
              <p>{product.description}</p>
              <div >
                <Link to="/Finish">
                  <button className="product-btn">Comprar Agora</button>
                </Link>
                <button
                  className="product-btn"
                  onClick={() =>
                    addItem({
                      ...product,
                      totalPrice: product.price,
                    })
                  }
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}

      <Footer />
    </div>
  );
};

export default BrinquedosDetails;