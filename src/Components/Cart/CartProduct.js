import React from 'react'
import "./cart.css"
const CartProduct = () => {
	return (

		<div class="product">
			<img src="https://cdn.pixabay.com/photo/2017/05/13/15/23/carrot-2309814__340.jpg"></img>
			<div class="product-info">
				<p class="product-name">Cabbage</p>
				<p class="product-price">₹ 200</p>
				<p class="product-offer">50% Discount</p>
				<p class="product-remove">
					<i class="fa fa-trash" aria-hidden="true"></i>
					<span class="remove">Remove From Cart</span>
				</p>
				<span className='adjustment-container'>
					<button className='btn-success'>+</button>
					<p class="product-quantity">Qnt:6</p>
					<button className='btn-error' >-</button>
				</span>
			</div>
		</div>

	)
}

export default CartProduct
