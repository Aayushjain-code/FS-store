import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Toast } from "../Toast/toast";
import { useThemeContext } from "../../context/themeContext";

const Navbar = () => {
  const { theme, toggleLightDarkTheme } = useThemeContext();

  const {
    logout,
    authState: { userName, loggedIn, cart },
  } = useAuth();
  const [cartQuantity, setCartQuantity] = useState(cart.length);

  useEffect(() => {
    setCartQuantity(cart.length);
  }, [cart]);

  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  const [msg1, setMsg1] = useState(false);
  const [msg2, setMsg2] = useState(false);

  const [toggleMenu, setToggleMenu] = useState("");
  const handleToggleMenu = () => {
    toggleMenu === "" ? setToggleMenu("active") : setToggleMenu("");
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          {" "}
          <i className="fab fa-canadian-maple-leaf"></i> FreshStore
        </Link>
        {/* <form action="" class="search-form">
          <input
            type="search"
            name=""
            placeholder="Search"
            id="searchBox"
          ></input>
          <label for="searchBox" class="fas fa-search"></label>
        </form> */}

        <nav className={`navbar ${toggleMenu}`}>
          <Link to="/">HOME</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/wishlist">WISHLIST</Link>
          <Link to="/cart">CART</Link>
          {loggedIn ? (
            <a>
              <div onClick={() => logout()}>Logout</div>
            </a>
          ) : (
            <a>
              <div onClick={handleClick}>Login</div>
            </a>
          )}
        </nav>

        <div className="icons">
          <span className="user-text">Hi, {userName}</span>{" "}
          <div className="fas fa-search" id="search-btn"></div>
          <div
            onClick={toggleLightDarkTheme}
            className={`${theme === "light" ? "fas fa-moon" : "fas fa-sun"} `}
            id="theme-btn"
          ></div>
          <div className="m1 badge-container" onClick={() => navigate("/cart")}>
            <div className="fas fa-shopping-cart"></div>
            <span className="badge right-badge sm-badge"> {cartQuantity} </span>
          </div>
          <div
            class="fas fa-bars"
            id="menu-btn"
            onClick={handleToggleMenu}
          ></div>
        </div>
      </header>
      <Toast />
    </>
  );
};

export default Navbar;
