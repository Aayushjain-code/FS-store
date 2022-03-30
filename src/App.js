import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Mockman from "mockman-js";

import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/Wishlist/Wishlist";
import Products from "./Components/Products/Products";


import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";

import RistrictAuth from "./Components/Authentication/ReqResAuth/RestrictAuth";
import RequireAuth from "./Components/Authentication/ReqResAuth/RequireAuth";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/products" element={<Products />} />
        <Route path="/mockman" element={<Mockman />} />

        <Route element={<RequireAuth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />

        </Route>

        <Route element={<RistrictAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
