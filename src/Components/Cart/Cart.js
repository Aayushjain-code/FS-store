import React from 'react'
import "./cart.css"
import CartProduct from './CartProduct'
import CartSummary from './CartSummary'
const Cart = () => {
	return (
		<div>

			<div class="cart-container">
				{/* <h1 class="heading-cart">Shopping Cart</h1> */}
				<div class="cart">
					<div class="products">
						<CartProduct />
						<CartProduct />
					</div>
					<CartSummary />

				</div>
			</div>
		</div>
	)
}

export default Cart
