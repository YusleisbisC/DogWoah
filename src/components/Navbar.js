

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/envios">Envíos</a></li>
      </ul>
      <div className="cart-icon">
        {/* Icono de carrito */}
      </div>
    </nav>
  );
};

export default Navbar;
