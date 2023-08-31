import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './Baño.css';

const products = [
  {
    id: 1,
    name: 'Champú para cachorros',
    image: 'imagenes/champu-1.jpg',
    price: 12.99,
  },
  {
    id: 2,
    name: 'Cepillo suave',
    price: 8.49,
    image: 'imagenes/cepillo.jpg',
  },
  // Agrega más productos aquí
];

export const BañoPage = () => {
  return (
    <div>
      <Navbar />
      {/* Portada de la categoría */}
      <div className="category-cover">
        <h2>Baño</h2>
        {/* Aquí puedes agregar una imagen de fondo si lo deseas */}
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
