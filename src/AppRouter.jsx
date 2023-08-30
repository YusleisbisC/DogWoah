import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ProductsPage } from "./components/ProductsPage";
import { ShippingForm } from "./components/ShippingForm";
import { Contact } from "./components/Contact";
import {CartPage }from "./components/CartPage";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/productos",
    element: <ProductsPage />,
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
  }, // Agregado el elemento CartPage
]);
