import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './AlimentosPage.css';


const products = [
  {
    id: 1,
    name: 'Comida premium para cachorros',
    image: 'imagenes/comida-1.jpg',
    price: 19.99,
  },
  {
    id: 2,
    name: 'Snacks saludables',
    image: 'imagenes/snacks.jpg',
    price: 5.99,
  },
  // Agrega más productos aquí
];

export const AlimentosPage = () => {
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
