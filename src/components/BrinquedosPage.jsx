import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './Brinquedos.css';

const products = [
  {
    id: 1,
    name: 'Pelota de goma resistente',
    image: 'ruta/imagen1.jpg',
    price: 9.99,
  },
  {
    id: 2,
    name: 'Juguete masticable en forma de hueso',
    image: 'ruta/imagen2.jpg',
    price: 12.49,
  },
  // Agrega más productos aquí
];

export const BrinquedosPage = () => {
  return (
    <div>
      <Navbar />
      {/* Portada de la categoría */}
      <div className="category-cover-brinquedos">
        <h2>Brinquedos</h2>
        {/* Puedes agregar una imagen de fondo si lo deseas */}
      </div>

      {/* Lista de productos */}
      <div className="product-list">
        {products.map((product) => (
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
