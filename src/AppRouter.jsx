import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ShippingForm } from "./components/ShippingForm";
import { Contact } from "./components/Contact";
import {CartPage }from "./components/CartPage";
import { BañoPage } from "./components/BañoPage";
import { AlimentosPage } from "./components/AlimentosPage";
import { BrinquedosPage } from "./components/BrinquedosPage";
import { Productos } from "./components/Produtos";
import { AdminNavbar } from "./components/AdminNav";







export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/envios",
    element: <ShippingForm />,
  },
  {
    path: "/cart",
    element: <CartPage />,

  },

  {
    path: "/Productos",
    element: <Productos/>,

  },
  {
    path: "/produtos/Alimentos",
    element: <AlimentosPage />,

  },
  {
    path: "/produtos/Brinquedos",
    element: <BrinquedosPage/>,

  },
  {
    path: "/produtos/Baño",
    element: <BañoPage />,
  },
  {
    path: "/AdminNavbar",
    element: <AdminNavbar/>,
  },
 
  

  
  
]);
