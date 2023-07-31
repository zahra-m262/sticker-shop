import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./store/index.js";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import { ToastContainer } from "react-toastify";
import MainLayout from "./components/layouts/MainLayout.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import CartTable from "./components/CartTable.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/products/:productID",
    element: (
      <MainLayout>
        <ProductDetails />
      </MainLayout>
    ),
  },
  {
    path: "/cart",
    element: (
      <MainLayout>
        <CartTable />
      </MainLayout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <ToastContainer />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
