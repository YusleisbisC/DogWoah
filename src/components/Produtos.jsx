import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './produtos.css';

export const Productos = () => {
  const [category, setCategory] = useState(''); // Estado para almacenar la categoría seleccionada
  const [products, setProducts] = useState([]); // Estado para almacenar la lista de productos

  // Simulación de lista de productos (reemplaza con tus datos reales)
  const productList = [
    { id: 1, name: 'Producto 1', category: 'Alimentos' },
    { id: 2, name: 'Producto 2', category: 'Baño' },
    { id: 3, name: 'Producto 3', category: 'Brinquedos' },
    // ... más productos
  ];

  // Filtra los productos según la categoría seleccionada
  const filteredProducts = category
    ? productList.filter((product) => product.category === category)
    : productList;

  // Maneja el cambio de categoría
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  // Actualiza la lista de productos cuando cambia la categoría
  useEffect(() => {
    setProducts(filteredProducts);
  }, [category]);

  return (
    <div>
      <Navbar />
      <div className="productos-container">
        <h1>Productos</h1>
        <div>
          <select
            onChange={(e) => handleCategoryChange(e.target.value)}
            value={category}
          >
            <option value="">Todas las categorías</option>
            <option value="Alimentos">Alimentos</option>
            <option value="Baño">Baño</option>
            <option value="Brinquedos">Brinquedos</option>
          </select>
        </div>
        <div>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Link to={`/productos/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};
