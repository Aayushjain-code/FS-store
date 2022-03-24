import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Mockman from "mockman-js";

import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";


import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mockman" element={<Mockman />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
