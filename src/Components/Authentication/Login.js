import React from 'react'
import './authentication.css'

const Login = () => {
	return (
		<div><div className="wrapper login-wrapper">
			<h2>Login</h2>
			<form action="#">
				<div className="input-box">
					<input type="text" placeholder="Enter your email" required></input>
				</div>
				<div className="input-box">
					<input type="password" placeholder="Create password" required></input>
				</div>
				<div className="button">
					Login Now
				</div>
				<div className="m1 btn btn-link">
					<h3>Not having an account? <a href="">Signup now</a></h3>
				</div>
			</form>
		</div>
		</div>
	)
}

export default Login
