import React, { useState } from "react";
import fb from "../assets/facebook.png";
import insta from "../assets/insta.png";
import youtube from "../assets/youtube.png";
import axios from "axios";

const Login = () => {
	// State to store email and password
	const [aluminiId, setAluminiId] = useState("");
	const [password, setPassword] = useState("");

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// API URL
		const apiUrl = "http://localhost:8080/auth/aluminiLogin";

		try {
			// Send POST request with email and password
			const response = await axios.post(apiUrl, {
				aluminiId: aluminiId,
				password: password,
			});

			// Handle successful login
			if (response.status === 200) {
				alert("Login successful!");
				localStorage.setItem("token", response.data.token); // Store token for future requests
				window.location.href = "/aluminidash"; // Redirect to dashboard or home
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
			<h2>Alumini Login</h2>
			<p>Please Enter your Account details</p>

			<form onSubmit={handleSubmit}>
				<label htmlFor="aluminiId">Alumini Id</label>
				<input
					type="text"
					id="aluminiId"
					placeholder="Jenter the AluminiId"
					required
					value={aluminiId}
					onChange={(e) => setAluminiId(e.target.value)}
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
					<a href="/">Student Login</a>
				</p>
			</form>
		</div>
	);
};

export default Login;
