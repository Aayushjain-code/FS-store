import React from 'react'
import './authentication.css'

const Signup = () => {
	return (
		<div>	<div className="wrapper">
			<h2>Sign-Up</h2>
			<form action="#">
				<div className="input-box">
					<input type="text" placeholder="Enter your name" required></input>
				</div>
				<div className="input-box">
					<input type="text" placeholder="Enter your email" required></input>
				</div>
				<div className="input-box">
					<input type="password" placeholder="Create password" required></input>
				</div>
				<div className="input-box">
					<input type="password" placeholder="Confirm password" required></input>
				</div>
				<div className="policy">
					<input type="checkbox"></input>
					<h3>I accept all terms & condition</h3>
				</div>
				<div className="button">
					Sign-Up
				</div>
				<div className="text">
					<h3>Already have an account? <a href="">Login now</a></h3>
				</div>
			</form>
		</div></div>
	)
}

export default Signup
