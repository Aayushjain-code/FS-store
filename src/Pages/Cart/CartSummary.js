import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "./cart.css";

const CartSummary = () => {
  const [totalItem, setTotalItem] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const {
    authState: { cart },
  } = useAuth();

  useEffect(() => {
    setTotalItem(totalItemQty(cart));
  }, [cart]);

  useEffect(() => {
    setTotalPrice(totalItemPrice(cart));
  }, [cart]);

  const totalItemQty = (cart) => {
    const totalQtyReducer = (acc, curr) => (acc += curr.qty);
    return cart.length === 0 ? 0 : cart.reduce(totalQtyReducer, 0);
  };

  const totalItemPrice = (cart) => {
    const totalPriceReducer = (acc, curr) => (acc += curr.priceNew * curr.qty);
    return cart.length === 0 ? 0 : cart.reduce(totalPriceReducer, 0);
  };

  return (
    <div class="cart-total">
      <p>
        <span>Total Price :</span>
        <span>
          <b> ₹{totalPrice} </b>
        </span>
      </p>
      <p>
        <span>Subtotal :</span>
        <span>
          {" "}
          <b>({totalItem}) items</b>
        </span>
      </p>

      <Link to="/home">Proceed to Checkout</Link>
    </div>
  );
};

export default CartSummary;
