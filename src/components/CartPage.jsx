
import { useCart } from "react-use-cart";
import "./CartPage.css";

export const CartPage = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  return (
    <div className="cart-container">
      <h2>Carrinho de Compras</h2>
      {items.length === 0 ? (
        <p className="empty-cart">El carrito de compras está vacío.</p>
      ) : (
        <div>
          {items.map((item) => (
            <li className="cart-item" key={item.id}>
              {item.quantity} x {item.name} - {item.price * item.quantity}{" "}
              &mdash;
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button onClick={() => removeItem(item.id)}>&times;</button>
            </li>
          ))}
          <p className="cart-total">
            Total: R${" "}
            {items
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
          <a href="/" className="continue-shopping">
            Continuar Comprando
          </a>
        </div>
      )}




export const CartPage = () => {
 
 

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      

    </div>
  );
};
