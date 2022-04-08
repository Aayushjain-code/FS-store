import React from "react";
import { useAuth } from "../../context/authContext";

import "./wishlist.css";
import WishListCard from "./WishListCard";
const Wishlist = () => {
  const {
    authState: { wishlist },
  } = useAuth();

  return (
    <div>
      <section class="cards" id="cards">
        <div class="box-container">
          {wishlist.map((wishListItem) => {
            return (
              <div key={wishListItem._id}>
                <WishListCard wishListItem={wishListItem} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
