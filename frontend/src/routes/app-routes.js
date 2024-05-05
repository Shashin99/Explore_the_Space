import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../components/LoginComponent/LoginComponent";
import Register from "../components/RegisterComponent/RegisterComponent";

import HomePage from "../pages/HomePage/Home";
import HomePageNew from "../pages/HomePage/HomeNew";
import Apod from "../pages/APOD/Apod";
import MarsRoverPhotos from "../pages/MarsRoverPhotos/MarsRoverPhotos";

function App() {
	return (
		<>
			<Router>
				<Routes>
					{/* Home Page */}
					<Route path="/" element={<HomePage />} />

					{/* Login Selection */}
					<Route path="/login" element={<Login />} />

					{/* Register Selection */}
					<Route path="/register" element={<Register />} />

					{/* Home Page New */}
					<Route path="/home" element={<HomePageNew />} />

					{/* Astronomy Picture of the Day */}
					<Route path="/apod" element={<Apod />} />

					{/* Mars Rover */}
					<Route path="/mars_rover" element={<MarsRoverPhotos />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
