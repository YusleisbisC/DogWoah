// ProductForm.jsx
import React, { useState } from 'react';
import './ProductForm.css';

export const ProductForm = ({ addProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un objeto con los datos del nuevo producto
    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
    };

    // Llamar a la función para agregar el producto
    addProduct(newProduct);

    // Limpiar los campos del formulario después de agregar el producto
    setProductName('');
    setProductPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="productName">Nombre del producto:</label>
        <input
          type="text"
          className="form-control"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="productPrice">Precio del producto:</label>
        <input
          type="number"
          className="form-control"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Agregar Producto</button>
    </form>
  );
};
