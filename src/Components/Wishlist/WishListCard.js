import React from 'react'
import { useCart } from '../../context/cartContext';
import { useWishlist } from '../../context/wishListContext';
import "./wishlist.css"
const WishListCard = ({ wishListItem }) => {

	const { addToCart } = useCart();
	const { removeFromWishlist } = useWishlist();
	return (
		<div>
			<div class="m1 card vertical-card1-container box">
				<div class="badge-container image">
					<img src={wishListItem.imageUrl} alt="Fiddle Leaf fig" class="card-img"></img>
					{wishListItem.offer && <h3> Sale </h3>}
					{wishListItem.offerOFF !== "0" && <span>{wishListItem.offerOFF} OFF</span>}
				</div>
				<div class="p1 card-text-container content">
					<h5 class="card-header card-title">{wishListItem.title}</h5>
					<div class="card-info">Stock available</div>
					<div class=" ">
						<div class="price">Rs.{wishListItem.priceNew} <span>Rs.{wishListItem.priceOld}</span> </div>

					</div>
					<div class="btn-container">
						<button class="button btn-success" onClick={() => { removeFromWishlist(wishListItem._id); addToCart(wishListItem, 'Added To Cart') }}>Buy Now</button>
						<button class="button btn-primary" onClick={() => { removeFromWishlist(wishListItem._id) }}>Remove</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WishListCard
