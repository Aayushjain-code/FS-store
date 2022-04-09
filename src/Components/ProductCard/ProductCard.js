import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useCart } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/wishListContext";

const ProductCard = ({ item }) => {
  const {
    authState: { loggedIn, cart, wishlist },
  } = useAuth();
  const [isWish, setIsWish] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  let navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  };
  const redirectToCart = () => {
    navigate("/cart");
  };
  const redirectToWishlist = () => {
    navigate("/wishlist");
  };

  return (
    <>
      <div class="m1 card vertical-card1-container box">
        {item.availableOrNot ? "" : <h4 class="overlay-text">Out Of stock </h4>}
        <div className={item.availableOrNot ? "" : "overlay-container"}>
          <div class="badge-container image">
            <img
              src={item.imageUrl}
              alt="Fiddle Leaf fig"
              class="card-img"
            ></img>
            {item.offer ? <h3>Sale</h3> : ""}

            {item.offerOFF !== "0" && (
              <button class="offer-tag outline">
                <span>{item.offerOFF} OFF</span>
              </button>
            )}
          </div>
          <div class="p1 card-text-container content">
            <h5 class="card-header card-title">{item.title}</h5>
            <div class=" ">
              <div class="price">
                Rs.{item.priceNew} <span>{item.priceOld}</span>{" "}
              </div>
              <p style={{ color: "red" }}>{item.categoryName}</p>
            </div>
            <div class="btn-container">
              {loggedIn ? (
                <>
                  {cart.length !== 0 &&
                  cart.some((cartItem) => cartItem._id === item._id) ? (
                    <button class="button btn-success" onClick={redirectToCart}>
                      Go to Cart
                    </button>
                  ) : (
                    <button
                      class="button btn-success"
                      onClick={() =>
                        item.availableOrNot && addToCart(item, "Added to Cart")
                      }
                    >
                      Buy Now
                    </button>
                  )}

                  {wishlist.length !== 0 &&
                  wishlist.some(
                    (wishlistItem) => wishlistItem._id === item._id
                  ) ? (
                    <button
                      class="button btn-primary"
                      onClick={redirectToWishlist}
                    >
                      See Wishlist
                    </button>
                  ) : (
                    <button
                      class="button btn-primary"
                      onClick={() =>
                        item.availableOrNot &&
                        addToWishlist(item, "Added to Wishlist")
                      }
                    >
                      Wishlist
                    </button>
                  )}

                  {/* <button class="button btn-primary" onClick={() => addToWishlist(item, 'Added to Wishlist')}>Wishlist</button> */}
                </>
              ) : (
                <>
                  <button
                    className={
                      item.availableOrNot
                        ? "button btn-success"
                        : "button btn-success btn-disabled"
                    }
                    onClick={redirectToLogin}
                  >
                    Buy Now
                  </button>
                  <button
                    className={
                      item.availableOrNot
                        ? "button btn-primary"
                        : "button btn-primary btn-disabled"
                    }
                    onClick={redirectToLogin}
                  >
                    Wishlist
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <h4 class="overlay-text">Sold Out!</h4>
				<div class="overlay-container">
					 */}
    </>
  );
};

export default ProductCard;
