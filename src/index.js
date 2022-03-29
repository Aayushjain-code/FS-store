import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "./context/context";
import { AuthProvider } from "./context/authContext"
import { CartProvider } from "./context/cartContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <Provider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
