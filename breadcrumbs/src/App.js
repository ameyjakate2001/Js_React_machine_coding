import "./styles.css";
import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Home from "./components/Home";
import BreadCrumb from "./components/Breadcrumb";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);
  return (
    <div className="container">
      <BrowserRouter>
        <BreadCrumb />
        <Routes>
          <Route index exact element={<Home products={products} />} />
          <Route
            path="/products"
            element={<ProductList products={products} />}
          />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
