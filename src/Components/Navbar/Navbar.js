import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
	return (
		<div>
			<header className="header">

				<Link to="/" className="logo"> <i className="fab fa-canadian-maple-leaf"></i> FreshStore </Link>

				<nav className="navbar">
					<Link to='/'><a>home</a></Link>
					<Link to='/products'><a>products</a></Link>
					<Link to='/wishlist'><a>Wishlist</a></Link>
					<Link to='/cart'><a>Cart</a></Link>
				</nav>
				<div className="icons">
					<div className="fas fa-search" id="search-btn"></div>
					<div className="fas fa-moon" id="theme-btn"></div>

					<div className="m1 badge-container">
						<div className="fas fa-shopping-cart"></div>
						<span className="badge right-badge sm-badge">10</span>
					</div>
				</div>


			</header>

		</div>
	)
}

export default Navbar
