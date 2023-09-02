// ProductForm.js
import React, { useState } from 'react';

export const ProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    images: [],
    inventory: '',
    variants: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza alguna validación antes de enviar el formulario
    onSubmit(formData);
    // Limpia el formulario después de enviar
    setFormData({
      name: '',
      price: '',
      description: '',
      category: '',
      images: [],
      inventory: '',
      variants: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre del producto
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Precio
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descripción
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Categoría o tipo
        </label>
        <select
          className="form-control"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una categoría</option>
          <option value="baño">Baño</option>
          <option value="alimentos">Alimentos</option>
          <option value="brinquedos">Brinquedos</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="images" className="form-label">
          Imágenes
        </label>
        <input
          type="file"
          multiple
          className="form-control"
          id="images"
          name="images"
          onChange={(e) => {
            const files = Array.from(e.target.files);
            setFormData({
              ...formData,
              images: files,
            });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inventory" className="form-label">
          Inventario
        </label>
        <input
          type="number"
          className="form-control"
          id="inventory"
          name="inventory"
          value={formData.inventory}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="variants" className="form-label">
          Opciones y variantes
        </label>
        <textarea
          className="form-control"
          id="variants"
          name="variants"
          value={formData.variants}
          onChange={handleChange}
        />
      </div>
     
    </form>
  );
};




