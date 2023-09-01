import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './AlimentosPage.css';

export const AlimentosPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a tu servidor JSON para obtener los productos
    fetch('http://localhost:4000/productos')
      .then((response) => response.json())
      .then((data) => setProducts(data)
      )
      .catch((error) => {
        console.error('Error al obtener productos', error);
      });
  }, [setProducts]);

  return (
    <div>
      <Navbar />
      {/* Portada de la categoría */}
      <div className="category-cover-alimentos">
        <h2>Alimentos</h2>
        {/* Puedes agregar una imagen de fondo aquí si lo deseas */}
      </div>

      {/* Lista de productos */}
      <div className="product-list">
        {products.filter(p => p.categoria === "baño" ).map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
