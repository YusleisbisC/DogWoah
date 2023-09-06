 cart
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { BanhoPage } from "./components/BanhoPage";
import { Contact } from "./components/Contact";
import { ShippingForm } from "./components/ShippingForm";
import { CartPage } from "./components/CartPage";
import { ProductList } from "./components/ProductList";
import { AlimentosPage } from "./components/AlimentosPage";
import { BrinquedosPage } from "./components/BrinquedosPage";
import BanhoDetails from "./components/details/BanhoDetails";
import AlimentosDetails from "./components/details/AlimentosDetails";
import BrinquedosDetails from "./components/details/BrinquedosDetails";
import AdminPage from "./components/admin/AdminPage";
import { useState } from "react";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { AdminProducts } from "./components/admin/produtcs/AdminProducts";
import { CartProvider, useCart } from "react-use-cart";

import { RouterProvider } from "react-router-dom";
import { router } from "./AppRouter";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



export function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
  };
  return (
    <>

      <CartProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/envios" element={<ShippingForm />} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/productlist" element={<ProductList />} />
            <Route
              exact
              path="/produtos/alimento"
              element={<AlimentosPage />}
            />
            <Route
              exact
              path="/produtos/brinquedo"
              element={<BrinquedosPage />}
            />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/produtos/banho" element={<BanhoPage />} />
            <Route path="/produtos/banho/:name" element={<BanhoDetails />} />
            <Route
              path="/produtos/alimento/:name"
              element={<AlimentosDetails />}
            />
            <Route
              path="/produtos/brinquedo/:name"
              element={<BrinquedosDetails />}
            />

            {isAdminLoggedIn ? (
              <Route exact path="/admin" element={<AdminDashboard />} />
            ) : (
              <Route
                exact
                path="/admin"
                element={<AdminPage onLogin={handleAdminLogin} />}
              />
            )}

            <Route
              exact
              path="/admin/productlist"
              element={<AdminProducts />}
            />
          </Routes>
        </Router>
      </CartProvider>

      <RouterProvider router={router} />

    </>
  );
}

export default App;
