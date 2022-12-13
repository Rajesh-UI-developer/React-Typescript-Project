// import Header from "./Components/header";
// import Sidenav from "./Components/sidenav";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/layout";
import Home from "./Pages/Home/home";
import Product from "./Pages/SingleProduct/Product";
import Casmetics from "./Pages/Casmetics";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/casmetics" element={<Casmetics />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
