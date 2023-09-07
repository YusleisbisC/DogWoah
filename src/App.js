import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { BanhoPage } from "./components/BanhoPage";
import { Contact } from "./components/Contact";
import { ShippingForm } from "./components/ShippingForm";
import { CartPage } from "./components/CartPage";
import { AlimentosPage } from "./components/AlimentosPage";
import { BrinquedosPage } from "./components/BrinquedosPage";
import { Productos } from "./components/Produtos";
import { CartProvider } from "react-use-cart";
import {AdminProducts} from "./components/AdminProducts";

export function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/envios" element={<ShippingForm />} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/produtos/Alimentos" element={<AlimentosPage />} />
            <Route exact path="/produtos/Brinquedos" element={<BrinquedosPage />} />
            <Route exact path="/produtos/Baño" element={<BanhoPage />} />
            <Route path="/produtos/banho/:name" element={<BanhoPage />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/AdminProducts" element={<AdminProducts />} />
            
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
