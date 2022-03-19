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

						<div className="box">
							<div className="image">
								<img src={blog1} alt=""></img>
							</div>
							<div className="content">
								<h3>explore the world now, adventure awaits</h3>
								<button className="button btn-success">Read more</button>
							</div>
						</div>

						<div className="box">
							<div className="image">
								<img src={blog2} alt=""></img>
							</div>
							<div className="content">
								<h3>explore the world now, adventure awaits</h3>
								<button className="button btn-success">Read more</button>

							</div>
						</div>

						<div className="box">
							<div className="image">
								<img src={blog3} alt=""></img>
							</div>
							<div className="content">
								<h3>explore the world now, adventure awaits</h3>
								<button className="button btn-success">Read more</button>

							</div>
						</div>

					</div>
				</div>

			</section>
			<section className="cards" id="cards">

				<h1 className="heading">Cards</h1>

				<div className="box-container">


					<div className="m1 card vertical-card1-container box">
						<div className="badge-container image">
							<img src={ProductImage1} alt="Fiddle Leaf fig" className="card-img"></img>
							<h3> Sale </h3>
							<h3> Sale </h3>
						</div>
						<div className="p1 card-text-container content">
							<h5 className="card-header card-title">Orange</h5>
							<div className="card-info">Stock available</div>
							<div className="">
								<p className="card-price price">Rs. 550</p>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
							</div>
							<div className="btn-container">
								<button className="button btn-success">Buy Now</button>
								<button className="button btn-primary">Wishlist</button>
							</div>
						</div>
					</div>



					<div className="m1 card vertical-card1-container box">
						<div className="badge-container image">
							<img src={ProductImage2} alt="Fiddle Leaf fig" className="card-img"></img>
							<h3> Sale </h3>
							<h3> Sale </h3>
						</div>
						<div className="p1 card-text-container content">
							<h5 className="card-header card-title">Onion</h5>
							<div className="card-info">Stock available</div>
							<div className="">
								<p className="card-price price">Rs. 55</p>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
							</div>
							<div className="btn-container">
								<button className="button btn-success">Buy Now</button>
								<button className="button btn-primary">Wishlist</button>
							</div>
						</div>
					</div>


					<div className="m1 card vertical-card1-container box">
						<div className="badge-container image">
							<img src={ProductImage3} alt="Fiddle Leaf fig" className="card-img"></img>
							<h3> Sale </h3>
							<h3> Sale </h3>
						</div>
						<div className="p1 card-text-container content">
							<h5 className="card-header card-title">Cabbage</h5>
							<div className="card-info">Stock available</div>
							<div className="">
								<p className="card-price price">Rs. 55</p>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
							</div>
							<div className="btn-container">
								<button className="button btn-success">Buy Now</button>
								<button className="button btn-primary">Wishlist</button>
							</div>
						</div>
					</div>



					<div className="m1 card vertical-card1-container box">
						<div className="badge-container image">
							<img src={ProductImage4} alt="Fiddle Leaf fig" className="card-img"></img>
							<h3> Sale </h3>
							<h3> Sale </h3>
						</div>
						<div className="p1 card-text-container content">
							<h5 className="card-header card-title">Avocado</h5>
							<div className="card-info">Stock available</div>
							<div className="">
								<p className="card-price price">Rs. 55</p>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
							</div>
							<div className="btn-container">
								<button className="button btn-success">Buy Now</button>
								<button className="button btn-primary">Wishlist</button>
							</div>
						</div>
					</div>


					<div className="m1 card vertical-card1-container box">
						<div className="badge-container image">
							<img src={ProductImage5} alt="Fiddle Leaf fig" className="card-img"></img>
							<h3> Sale </h3>
							<h3> Sale </h3>
						</div>
						<div className="p1 card-text-container content">
							<h5 className="card-header card-title">Carrots</h5>
							<div className="card-info">Stock available</div>
							<div className="">
								<p className="card-price price">Rs. 55</p>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
							</div>
							<div className="btn-container">
								<button className="button btn-success">Buy Now</button>
								<button className="button btn-primary">Wishlist</button>
							</div>
						</div>
					</div>

					<div className="m1 card vertical-card1-container box">
						<div className="badge-container image">
							<img src={ProductImage6} alt="Fiddle Leaf fig" className="card-img"></img>
							<h3> Sale </h3>
							<h3> Sale </h3>
						</div>
						<div className="p1 card-text-container content">
							<h5 className="card-header card-title">Onion</h5>
							<div className="card-info">Stock available</div>
							<div className="">
								<p className="card-price price">Rs. 55</p>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
							</div>
							<div className="btn-container">
								<button className="button btn-success">Buy Now</button>
								<button className="button btn-primary">Wishlist</button>
							</div>
						</div>
					</div>


					<div className="m1 card vertical-card1-container box">
						<div className="badge-container image">
							<img src={ProductImage1} alt="Fiddle Leaf fig" className="card-img"></img>
							<h3> Sale </h3>
							<h3> Sale </h3>
						</div>
						<div className="p1 card-text-container content">
							<h5 className="card-header card-title">Cabbage</h5>
							<div className="card-info">Stock available</div>
							<div className="">
								<p className="card-price price">Rs. 55</p>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
							</div>
							<div className="btn-container">
								<button className="button btn-success">Buy Now</button>
								<button className="button btn-primary">Wishlist</button>
							</div>
						</div>
					</div>



					<div className="m1 card vertical-card1-container box">
						<div className="badge-container image">
							<img src={ProductImage2} alt="Fiddle Leaf fig" className="card-img"></img>
							<h3> Sale </h3>
						</div>
						<div className="p1 card-text-container content">
							<h5 className="card-header card-title">Avocado</h5>
							<div className="card-info">Stock available</div>
							<div className="">
								<p className="card-price price">Rs. 55</p>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
							</div>
							<div className="btn-container">
								<button className="button btn-success">Buy Now</button>
								<button className="button btn-primary">Wishlist</button>
							</div>
						</div>
					</div>


				</div>

			</section>

		</div>
	)
}

export default home

