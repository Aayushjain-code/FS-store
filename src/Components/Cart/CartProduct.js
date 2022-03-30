import React from 'react'
import { useCart } from '../../context/cartContext'
import "./cart.css"
const CartProduct = ({ cartItem }) => {
	const { updateCartQuantity, removeFromCart } = useCart()
	return (

		<div class="product">
			<img src={cartItem.imageUrl}></img>
			<div class="product-info">
				<p class="product-name">{cartItem.title}</p>
				<p class="product-price">₹ {cartItem.priceNew}</p>
				{/* <p class="product-offer">50% Discount</p> */}
				<p class="product-remove">
					<i class="fa fa-trash" aria-hidden="true"></i>
					<span class="remove" onClick={() => removeFromCart(cartItem._id, 'Removed from Cart')}>Remove From Cart</span>
				</p>
				<span className='adjustment-container'>
					<button className='btn-success' onClick={() => updateCartQuantity(cartItem._id, 'increment', 'Cart updated')}>+</button>
					<p class="product-quantity">{cartItem.qty}</p>
					<button className='btn-error' onClick={() => updateCartQuantity(cartItem._id, 'decrement', 'Cart updated')} >-</button>
				</span>
			</div>
		</div>

	)
}

export default CartProduct
