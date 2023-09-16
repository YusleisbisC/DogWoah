import { useCart } from "react-use-cart";
import "./CartPage.css";
import { Navbar } from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "./Footer";

export const CartPage = () => {
  const { items, updateItemQuantity, removeItem } = useCart();
  const hasAddedProduct = items.length > 0;

  return (
    <div>
      <Navbar />
      {/* Contenedor del carrito */}
      <div className="cart-container">
        {items.length === 0 ? (
          <p className="empty-cart">El carrito de compras está vacío.</p>
        ) : (
          <ul>
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            {items.map((item) => (
              <li className="cart-item" key={item.id}>
                <span className="text-cart">
                  {item.quantity} x {item.nome} - ${item.price * item.quantity}
                </span>
                <div>
                  <button
                    className="quantity-button"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button
                    className="quantity-button"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className="remove-button"
                    onClick={() => removeItem(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
            <p className="cart-total">
              Total: ${" "}
              {items
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
            {hasAddedProduct && (
              <div className="shipping-incentive">
                Você ganhou frete grátis em seu próximo pedido!
              </div>
            )}
            <div className="links-div">
              <a href="/" className="continue-shopping">
              Continuar comprando
              </a>
              <a href="/finish" className="continue-shopping">
              Concluir compra
              </a>
            </div>
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
};
