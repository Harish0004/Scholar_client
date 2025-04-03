import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AluminiLogin from "./pages/AluminiLogin";
import AluminiRegister from "./pages/AluminiRegister";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/aluminiLogin" element={<AluminiLogin />} />
					<Route path="/aluminiRegister" element={<AluminiRegister />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
