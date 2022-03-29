import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';
import "./products.css";
import { useFilter } from '../../context/context';
import FilterContainer from './FilterContainer';
import { FilterFunction } from './updatedProducts';

const Products = () => {
	const { filterState, filterDispatch } = useFilter();
	const [products, setProducts] = useState([]);
	useEffect(async () => {
		const response = await axios("/api/products");
		setProducts(response.data.products)
	}, [])

	const updatedProducts = FilterFunction(products);

	return (
		< div >
			<div className="main-container">
				<FilterContainer />
				<div className='product-container'>
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
