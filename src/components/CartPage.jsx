// CartPage.js
import React, { useState } from 'react';
import { Navbar } from './Navbar';



export const CartPage = (  ) => {
  const cartItems = [{ 
   name: 'correa',
   price: '2 '
  }]
  const [items, setItems] = useState(cartItems);

  const calculateTotal = () => {
    let total = 0;
    for (const item of items) {
      total += parseFloat(item.price.replace('$', ''));
    }
    return '$' + total.toFixed(2);
  };

  const handleRemoveFromCart = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
   
  };

  return (
    <div>
      <Navbar/>
      <h2>Carrito de Compras</h2>
      {items.length === 0 ? (
        <p>El carrito de compras está vacío.</p>
      ) : (
        <div>
          {items.map((product, index) => (
            <div key={index}>
              <p>{product.name}</p>
              <p>Precio: {product.price}</p>
              <button onClick={() => handleRemoveFromCart(index)}>Eliminar</button>
            </div>
          ))}
          <p>Total: {calculateTotal()}</p>
        </div>
      )}
    </div>
  );
};


