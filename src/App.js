import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Mockman from "mockman-js";

import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Products from "./Pages/Products/Products";

import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";

import RistrictAuth from "./Components/ReqResAuth/RestrictAuth";
import RequireAuth from "./Components/ReqResAuth/RequireAuth";

function App() {
  const location = useLocation();
  return (
    <div>
      {/* <Navbar /> */}
      {location.pathname === "/" ||
      location.pathname === "/products" ||
      location.pathname === "/cart" ||
      location.pathname === "/wishlist" ? (
        <Navbar />
      ) : null}
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

      {location.pathname !== "/wishlist" ||
      location.pathname !== "/cart" ||
      location.pathname !== "/login" ||
      location.pathname !== "/signup" ? null : (
        <Footer />
      )}
    </div>
  );
}

export default App;
