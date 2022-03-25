import { useState, useEffect } from 'react'
import './authentication.css'

const Signup = () => {
	const [userDetails, setUserDetails] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		terms: true,
	});

	const [error, setError] = useState({ isError: false, text: '' })
	useEffect(() => {
		const timeOutId = setTimeout(() => {
			setError({ isError: false, text: '' })
		}, 3000)


		return () => clearTimeout(timeOutId);
	}, [error])

	const submitHandler = (e) => {
		e.preventDefault()
		const passwordValidation = /^(?=.*\d)(?=.*[a-z]).{5,10}$/;

		if (!userDetails.firstName || !userDetails.lastName || !userDetails.email || !userDetails.password || !userDetails.confirmPassword || !userDetails.terms) {
			setError({ isError: true, text: 'Please Enter all the Fields!!' })
		}

		else if (!userDetails.email.includes('@')) {
			setError({ isError: true, text: 'Invalid Email-Id' })
		}

		else if (!userDetails.password.match(passwordValidation)) {
			setError({ isError: true, text: 'The password must be alphanumberic and atleast 5 characters long!!' })
		}

		else if (userDetails.password !== userDetails.confirmPassword) {
			setError({ isError: true, text: 'Password and Confirm Password Not Match!!' })
		}

		else if (!userDetails.terms) {
			setError({ isError: true, text: 'Please accept terms and conditions!!' })
		} else {
			// signup(userDetails)
			setUserDetails({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', terms: true })
		}
	}
	return (
		<div className="wrapper">
			{error && <p className="error">{error.text}</p>}
			<h2>Sign-Up</h2>
			<form onSubmit={(e) => { e.preventDefault() }} >
				<div className="input-box">
					<input value={userDetails.firstName} onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })} name="first-name" type="text" placeholder="Enter your firstName" ></input>
				</div>
				<div className="input-box">
					<input value={userDetails.lastName} onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })} name="last-name" type="text" placeholder="Enter your lastName" ></input>
				</div>
				<div className="input-box">
					<input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="text" placeholder="Enter your email" ></input>
				</div>
				<div className="input-box">
					<input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type="password" placeholder="Create password" ></input>
				</div>
				<div className="input-box">
					<input value={userDetails.confirmPassword} onChange={(e) => setUserDetails({ ...userDetails, confirmPassword: e.target.value })} type="password" placeholder="Confirm password" ></input>
				</div>
				{/* <div className="policy">
					<input value={true} data-val="true" onChange={(e) => setUserDetails({ ...userDetails, terms: !value })} type="checkbox"></input>
					{console.log(userDetails.terms)}
					<h3>I accept all terms & condition</h3>
				</div> */}
				<button className='button' onClick={submitHandler}> Signup</button>
				<div className="text">
					<h3>Already have an account? <a href="">Login now</a></h3>
				</div>
			</form>
		</div>
	)
}

export default Signup
