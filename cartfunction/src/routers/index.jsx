import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
