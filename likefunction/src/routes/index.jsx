import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clothes from "../components/Clothes";
import List from "../components/List";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Clothes />} />
        <Route path="/like" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}
