import React from 'react'
import "./wishlist.css"
const WishListCard = () => {
	return (
		<div>
			<div class="m1 card vertical-card1-container box">
				<div class="badge-container image">
					<img src="/images/product-1.png" alt="Fiddle Leaf fig" class="card-img"></img>
					<h3> Sale </h3>
				</div>
				<div class="p1 card-text-container content">
					<h5 class="card-header card-title">Orange</h5>
					<div class="card-info">Stock available</div>
					<div class=" ">
						<div class="price"> 290.99 <span>350.99</span> </div>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
					</div>
					<div class="btn-container">
						<button class="button btn-success">Buy Now</button>
						<button class="button btn-primary">Remove</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WishListCard
