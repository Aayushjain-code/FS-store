import React from "react";
import "./cart.css";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";
import { useAuth } from "../../context/authContext";
const Cart = () => {
  const {
    authState: { cart },
  } = useAuth();
  return (
    <div>
      <div class="cart-container">
        <h1 class="heading-cart">
          Shopping Cart: {cart.length} Items in Basket!
        </h1>
        <div class="cart">
          <div class="products">
            {/* <CartProduct /> */}
            {cart.map((cartItem) => {
              return <CartProduct cartItem={cartItem} />;
            })}
          </div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
