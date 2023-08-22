import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ProductsPage } from "./components/ProductsPage";
import { Envios } from "./components/Envios";

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
    path: "/envios",
    element: <Envios />,
  },
]);
