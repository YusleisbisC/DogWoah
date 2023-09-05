import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Asegúrate de importar tu instancia de Firebase adecuada

export const AdminPanel = () => {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    name: '',
    price: '',
    description: '',
    // Otros campos relevantes para tu producto
  });

  // Cargar la lista de productos cuando se monte el componente
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosSnapshot = await db.collection('productos').get();
        const productosData = productosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosData);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };

    fetchProductos();
  }, []);

  // Manejar cambios en el formulario de nuevo producto
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({
      ...nuevoProducto,
      [name]: value,
    });
  };

  // Agregar un nuevo producto
  const agregarProducto = async () => {
    try {
      // Realiza validaciones y luego agrega el producto a Firebase
      await db.collection('productos').add(nuevoProducto);
      // Actualiza la lista de productos después de agregar uno nuevo
      setProductos([...productos, nuevoProducto]);
      // Limpia el formulario
      setNuevoProducto({
        name: '',
        price: '',
        description: '',
        // Reinicia otros campos del formulario si es necesario
      });
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  };

  return (
    <div>
      <h2>Panel de Administración</h2>
      <div>
        <h3>Lista de Productos</h3>
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              {producto.name} - {producto.price}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Agregar Nuevo Producto</h3>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={nuevoProducto.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={nuevoProducto.price}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={nuevoProducto.description}
          onChange={handleInputChange}
        />
        <button onClick={agregarProducto}>Agregar Producto</button>
      </div>
    </div>
  );
};


