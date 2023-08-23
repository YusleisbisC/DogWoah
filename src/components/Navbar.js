import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      
       <Link to={'/envios'}>Envios</Link>
       <Link to={'/productos'}>Productos</Link>
      <div className="cart-icon">
        {/* Icono de carrito */}
      </div>
    </nav>
  );
};


