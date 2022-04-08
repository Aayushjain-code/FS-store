import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "./context/context";
import { AuthProvider } from "./context/authContext";
import { CartProvider } from "./context/cartContext";
import { WishlistProvider } from "./context/wishListContext";
import { ThemeProvider } from "./context/themeContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Provider>
            <ThemeProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ThemeProvider>
          </Provider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
