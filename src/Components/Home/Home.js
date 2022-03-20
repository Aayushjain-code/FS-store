import React from 'react'
import "./home.css"


import blog1 from "../../assets/images/blog-1.jpg"
import blog2 from "../../assets/images/blog-2.jpg"
import blog3 from "../../assets/images/blog-3.jpg"

import ProductImage1 from "../../assets/images/product-1.png"
import ProductImage2 from "../../assets/images/product-2.png"
import ProductImage3 from "../../assets/images/product-4.png"
import ProductImage4 from "../../assets/images/product-6.png"
import ProductImage5 from "../../assets/images/product-7.png"
import ProductImage6 from "../../assets/images/product-8.png"
import FeaturedCard from './FeaturedCard'





const home = () => {
	return (
		<div>

			<section className="home" id="home">
				<div className="content">
					<h3>Fell the freshness</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
						alias eos facilis, ipsa est asperiores repellendus!</p>
					<button className="button btn-success">Read more</button>
				</div>

			</section>
			<section className="category" id="category">

				<div className="category">
					<h1 className="heading"> Featured Categories </h1>

					<div className="box-container">
						<FeaturedCard image={blog1} title={"Category1"} />
						<FeaturedCard image={blog2} title={"Category2"} />
						<FeaturedCard image={blog3} title={"Category3"} />
					</div>
				</div>

			</section>


		</div>
	)
}

export default home

