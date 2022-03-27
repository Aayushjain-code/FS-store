import React from 'react'
import "./cart.css"

const CartSummary = () => {
	return (

		<div class="cart-total">
			<p>
				<span>Total Price</span>
				<span>₹ 3,000</span>
			</p>
			<p>
				<span>Number of Items</span>
				<span>2</span>
			</p>
			<p>
				<span>You Save</span>
				<span>₹ 1,000</span>
			</p>
			<a href="#">Proceed to Checkout</a>
		</div>

	)
}

export default CartSummary
