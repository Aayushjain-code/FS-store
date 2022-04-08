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

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          {" "}
          <i className="fab fa-canadian-maple-leaf"></i> FreshStore{" "}
        </Link>

        <nav className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/wishlist">WISHLIST</Link>
          <Link to="/cart">CART</Link>
        </nav>
        <div className="icons">
          <span
            style={{
              fontWeight: "bold",
              margin: "1rem",
              fontSize: "initial",
            }}
          >
            Hi, {userName}
          </span>
          <div className="fas fa-search" id="search-btn"></div>
          <div
            onClick={toggleLightDarkTheme}
            className={`${theme === "light" ? "fas fa-moon" : "fas fa-sun"} `}
            id="theme-btn"
          ></div>

          {loggedIn ? (
            <>
              <div
                className="fas fa-sign-out-alt"
                id="theme-btn"
                onMouseEnter={() => setMsg2(true)}
                onMouseLeave={() => setMsg2(false)}
                onClick={() => logout()}
              ></div>
              {msg2 ? <span className="msgStyle1">Logout</span> : ""}
            </>
          ) : (
            <>
              <div
                className="fas fa-user"
                id="theme-btn"
                onMouseEnter={() => setMsg1(true)}
                onMouseLeave={() => setMsg1(false)}
                onClick={handleClick}
              ></div>
              {msg1 ? <span className="msgStyle1">Login</span> : ""}
            </>
          )}

          <div className="m1 badge-container">
            <div className="fas fa-shopping-cart"></div>
            <span className="badge right-badge sm-badge"> {cartQuantity} </span>
          </div>
        </div>
      </header>
      <Toast />
    </>
  );
};

export default Navbar;
