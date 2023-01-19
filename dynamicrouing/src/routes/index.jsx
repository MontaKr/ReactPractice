import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "../components/Cards";
import Product from "../components/Product";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
