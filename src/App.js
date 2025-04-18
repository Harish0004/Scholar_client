import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AluminiLogin from "./pages/AluminiLogin";
import AluminiRegister from "./pages/AluminiRegister";
import Dashboard from "./pages/student/Dashboard";
import AvailableScholarships from "./pages/student/AvailableScholarships";
import MyApplications from "./pages/student/MyApplications";
import ConnectWithAlumni from "./pages/student/ConnectWithAlumni ";
import StudentProfile from "./pages/student/StudentProfile";
import AlumniDashboard from "./pages/alumini/AlumniDashboard";
import IncomingRequests from "./pages/alumini/IncomingRequests";
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
					<Route path="/studDash" element={<Dashboard />} />
					<Route path="/scholarships" element={<AvailableScholarships />} />
					<Route path="/applications" element={<MyApplications />} />
					<Route path="/alumniconnect" element={<ConnectWithAlumni />} />
					<Route path="/profile" element={<StudentProfile />} />
					<Route path="/aluminidash" element={<AlumniDashboard />} />
					<Route path="/requests" element={<IncomingRequests />} />


				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
