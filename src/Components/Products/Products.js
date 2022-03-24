// import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';
import "./products.css";
import { useFilter } from '../../context/context';
import FilterContainer from './FilterContainer';
import { products } from "../../backend/db/products"
import { FilterFunction } from './updatedProducts';

const Products = () => {
	const { filterState, filterDispatch } = useFilter();
	// const [products, setProducts] = useState([]);
	// const products = productsInList;
	// useEffect(() => {
	// 	(axios.get("/api/products").then(res => {
	// 		setProducts(res.data.products);
	// 		console.log("response:", res.data.products)
	// 	}))();
	// }, [])

	const updatedProducts = FilterFunction(products);

	return (
		< div >
			<div className="main-container">
				<FilterContainer />
				<div>
					<section className="cards" id="cards">
						{/* {updatedProducts().length} */}
						<div className="box-container">
							{
								updatedProducts.map((item) => {
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
			</div>
		</div >
	)
}

export default Products
