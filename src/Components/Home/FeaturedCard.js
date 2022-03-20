import React from 'react'

const FeaturedCard = ({ image, title }) => {
	return (
		<div>
			<div className="box">
				<div className="image">
					<img src={image} alt=""></img>
				</div>
				<div className="content">
					<h3>{title}</h3>
					<button className="button btn-success">Read more</button>
				</div>
			</div>
		</div>
	)
}

export default FeaturedCard
