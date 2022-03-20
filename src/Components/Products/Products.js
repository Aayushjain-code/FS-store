import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';
import "./products.css";


const url = "/api/products";
const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get(url).then(res => {
			setProducts(res.data.products);
			console.log("response:", res.data.products)
		})
	}, [])



	return (
		<div>
			{ }
			<div className="main-container">
				<div className="filter-container">

					<h1 className="filter-heading">filter-Products</h1>
					<span className="filter-sub-heading">
						<label style={{ fontSize: " 1.8rem" }}>Price: </label>
						<select >
							<option value="All">All</option>
							<option value="Above 50 Below 100">Above 50 Below 100</option>
							<option value="Above 100 Below 200">Above 100 Below 200</option>
							<option value="Above 200 Below 300">Above 200 Below 300</option>
						</select>
					</span>

					<span>
						<label>
							<input type="radio" name="group1" /> <span>Low to high</span>
						</label>
						<br />
						<label>
							<input type="radio" name="group1" /> <span>High to low</span>
						</label>
					</span>

					<span className="filter-sub-heading">
						<label style={{ fontSize: " 1.8rem" }}>Category: </label>
						<select >
							<option value="All">All</option>
							<option value="Above 50 Below 100">Above 50 Below 100</option>
							<option value="Above 100 Below 200">Above 100 Below 200</option>
							<option value="Above 200 Below 300">Above 200 Below 300</option>
						</select>
					</span>
					<h1 className="filter-sub-heading">Ratings</h1>


				</div>
				<div>
					<section className="cards" id="cards">


						<div className="box-container">
							{
								products.map((item) => {
									return (
										<div key={item._id}>
											<ProductCard item={item} />
										</div>
									)
								})
							}




						</div>
					</section>
				</div>
			</div >
		</div >
	)
}

export default Products
