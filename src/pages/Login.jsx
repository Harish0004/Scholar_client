import React, { useState } from "react";
import fb from "../assets/facebook.png";
import insta from "../assets/insta.png";
import youtube from "../assets/youtube.png";
import axios from "axios";

const Login = () => {
	// State to store email and password
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// API URL
		const apiUrl = "http://localhost:8080/auth/login";

		try {
			console.log(email);
			console.log(password);
			// Send POST request with email and password
			const response = await axios.post(apiUrl, {
				email: email,
				password: password,
			});

			// Handle successful login
			if (response.status === 200) {
				alert("Login successful!");
				localStorage.setItem("token", response.data.token); // Store token for future requests
				window.location.href = "/studdash"; // Redirect to dashboard or home
			}
		} catch (error) {
			// Handle error response
			alert(
				error.response?.data?.message ||
					"Invalid credentials, please try again.",
			);
		}
	};

	return (
		<div className="login-container">
			<h2>Student Login</h2>
			<p>Please Enter your Account details</p>

			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					placeholder="Johndoe@gmail.com"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					placeholder="●●●●●●●●"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<div className="forgot-password">
					<a href="#">Forgot Password</a>
				</div>

				<button type="submit" className="sign-in-btn">
					Sign in
				</button>

				<div className="social-login">
					<img src={fb} alt="Google" />
					<img src={youtube} alt="GitHub" />
					<img src={insta} alt="Facebook" />
				</div>

				<p className="create-account">
					<a href="/register">Create an account</a>
				</p>
				<p className="create-account">
					<a href="/aluminiLogin">Alumini Login</a>
				</p>
			</form>
		</div>
	);
};

export default Login;
