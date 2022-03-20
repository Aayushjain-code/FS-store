import React from 'react'

const ProductCard = ({ item }) => {
	return (
		<div>
			<div class="m1 card vertical-card1-container box">
				<div class="badge-container image">
					<img src={item.imageUrl} alt="Fiddle Leaf fig" class="card-img"></img>
					{item.offer && <h3> Sale </h3>}
					{item.offerOFF !== "0" && <span>{item.offerOFF} OFF</span>}
				</div>
				<div class="p1 card-text-container content">
					<h5 class="card-header card-title">{item.title}</h5>
					<div class="card-info">Stock available</div>
					<div class=" ">
						<div class="price">Rs.{item.priceNew} <span>{item.priceOld}</span> </div>
						<p style={{ color: "red" }}>{item.categoryName}</p>
					</div>
					<div class="btn-container">
						<button class="button btn-success">Buy Now</button>
						<button class="button btn-primary">Wishlist</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
