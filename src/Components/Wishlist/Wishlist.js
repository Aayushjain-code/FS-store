import React from 'react'

import "./wishlist.css"
import WishListCard from './WishListCard'
const Wishlist = () => {
	return (
		<div>
			<section class="cards" id="cards">

				<div class="box-container">
					<WishListCard />
					<WishListCard />
					<WishListCard />
					<WishListCard />
				</div>

			</section>
		</div>
	)
}

export default Wishlist
