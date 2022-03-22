// import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';
import "./products.css";
import { useFilter } from '../../context/context';
import FilterContainer from './FilterContainer';
import { products } from "../../backend/db/products"

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

	const updatedProducts = () => {
		let updatedProductList = products;

		if (filterState.excludeNotAvailable) {
			updatedProductList = updatedProductList.filter((item) => item.availableOrNot)
			console.log(updatedProductList)
		}

		if (filterState.offerItems) {
			updatedProductList = updatedProductList.filter((item) => item.offer)
			console.log(updatedProductList)
		}

		if (filterState.byCategory) {
			if (filterState.byCategory === 'All') {
				updatedProductList = products
			} else {
				updatedProductList = updatedProductList.filter((item) => item.categoryName === filterState.byCategory)
				console.log(updatedProductList)
			}
		}

		if (filterState.byPrice) {
			if (filterState.byPrice === 'All') {
				updatedProductList = products
			} else if (filterState.byPrice === "Above 50 Below 100") {
				updatedProductList = updatedProductList.filter((item) => item.priceNew >= 50 && item.priceNew < 100)
			} else if (filterState.byPrice === "Above 100 Below 200") {
				updatedProductList = updatedProductList.filter((item) => item.priceNew >= 100 && item.priceNew < 200)
			} else if (filterState.byPrice === "Above 200 Below 300") {
				updatedProductList = updatedProductList.filter((item) => item.priceNew >= 200 && item.priceNew < 300)
			}
		}

		if (filterState.sortByRange) {
			updatedProductList = filterState.sortByRange === 0
				? updatedProductList
				: [...updatedProductList].filter((product) => product.priceNew <= filterState.sortByRange);
			console.log(updatedProductList)
		}

		if (filterState.isSort) {
			updatedProductList = updatedProductList.sort((a, b) =>
				filterState.isSort === 'lowToHigh' ? a.priceNew - b.priceNew : b.priceNew - a.priceNew
			)
			// console.log(updatedProductList)
		}
		if (filterState.byRating) {
			if (filterState.byRating === '4StarAndAbove') {
				updatedProductList = updatedProductList.filter((item) => item.rating >= 4)
			} else if (filterState.byRating === '3StarAndAbove') {
				updatedProductList = updatedProductList.filter((item) => item.rating >= 3)
			} else if (filterState.byRating === '2StarAndAbove') {
				updatedProductList = updatedProductList.filter((item) => item.rating >= 2)
			} else {
				updatedProductList = updatedProductList.filter((item) => item.rating >= 1)
			}
		}
		return updatedProductList;
	}

	return (
		< div >
			<div className="main-container">
				<FilterContainer />
				<div>
					<section className="cards" id="cards">
						{updatedProducts().length}
						<div className="box-container">
							{
								updatedProducts().map((item) => {
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
