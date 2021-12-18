import React, { useState } from 'react'
import Footer from 'components/FooterComponent/Footer'
import Header from 'components/HeaderComponent/Header'

import "./Login.css";
import Input from './Input';

function Login() {

	const [valueForm, setValueForm] = useState({
		email: "",
		password: "",
	});

	const [errorForm, setErrorForm] = useState({
		email: "",
		password: "",
	});

	const handleChangeForm = (e) => {
		const { name, value } = e.target;
		setValueForm({
			...valueForm,
			[name]: value,
		});
	};

	const handleSubmit = () => {
		let isValid = true;
		const newChangeError = {
			email: "",
			password: "",
		};

		if (valueForm.email.length === 0) {
			isValid = false;
			newChangeError.email = "Enter email";
		} else {
			newChangeError.email = "";
		}

		if (valueForm.password.length === 0) {
			isValid = false;
			newChangeError.password = "Enter password";
		} else {
			newChangeError.password = "";
		}

		if (isValid) {
			setErrorForm({
				email: "",
				password: "",
			});
			// do something ...
		} else {
			setErrorForm({ ...newChangeError });
		}
	}

	return (
		<>
			<Header />

			<div className="wrapper-login">
				<div className="container">
					<div className="content-login">
						<h1>Login</h1>

						<Input
							className="form-group"
							titleInput="Email"
							htmlFor="email"
							placeholder="Enter email"
							name="email"
							onChange={handleChangeForm}
							errorInput={errorForm.email}
						/>
						<Input
							className="form-group"
							titleInput="Password"
							htmlFor="password"
							placeholder="Enter password"
							name="password"
							onChange={handleChangeForm}
							errorInput={errorForm.password}
						/>

						<div>
							<button className="btn-login" onClick={handleSubmit}>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Login
