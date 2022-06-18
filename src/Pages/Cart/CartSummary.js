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

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        currency: "INR",
        amount: totalPrice * 100,
        name: "Fresh Store",
        description: "Thanks for shopping with us!",
        prefill: {
          name: "Meri Jane",
          email: "merijane@gmail.com",
          contact: "1234567891",
        },
        handler: function (response) {
          alert(
            `Payment Successful Payment Id ${response.razorpay_payment_id}`
          );
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    });
  };
  const razorpayHandler = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      console.log("you are offline");
      return;
    }
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

      <button className="btn btn-success" onClick={razorpayHandler}>
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartSummary;
