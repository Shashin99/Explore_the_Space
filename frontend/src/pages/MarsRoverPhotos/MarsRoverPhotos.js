import React, { useEffect, useState } from "react";
import Logo from "../../assets/imges/nav_logo.png";
import "./MarsRoverPhotos.css";
import axios from "axios";

function MarsRoverPhotos() {
	const [data, setData] = useState([]);
	const [camera, setCamera] = useState("All");

	useEffect(() => {
		let url = "";
		if (camera === "All") {
			url =
				"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=E70WRgh7y4vT98mANkdYJq90kJc5PeDaSDu44KFz";
		} else {
			url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=E70WRgh7y4vT98mANkdYJq90kJc5PeDaSDu44KFz`;
		}
		axios
			.get(url)
			.then((res) => {
				console.log(res.data);
				setData(res.data.photos);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, [camera]);

	return (
		<div className="bg-gradient-to-r from-brown-500 via-yellow-400 to-orange-500">
			<div className="nav-container py-4">
				<nav className="container mx-auto flex justify-between items-center">
					<div className="flex items-center gap-4 text-white font-bold text-2xl">
						<img src={Logo} alt="Logo" className="w-10" />
						<span> MY SPACE WORLD </span>
					</div>
					<div className="text-white hidden sm:block">
						<ul className="flex items-center gap-6 text-xl py-4">
							<li>
								<a href="/home"> Home </a>
							</li>
							<li>
								<a href="/apod"> Astronomy Picture of the Day </a>
							</li>
							<li>
								<a href=" "> </a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<div className="mars-rovers">
				<h1 className="text-center text-white font-bold text-4xl my-8"> Mars Rover Photos </h1>
				<h4 className="text-center text-white font-bold text-lg"> Select Camera View Here </h4>
				<div className="container mx-auto flex justify-center items-center gap-4 pb-8">
					<button
						className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
						onClick={() => setCamera("All")}
					>
						All
					</button>
					<button
						className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
						onClick={() => setCamera("FHAZ")}
					>
						FHAZ
					</button>
					<button
						className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
						onClick={() => setCamera("RHAZ")}
					>
						RHAZ
					</button>
					<button
						className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
						onClick={() => setCamera("MAST")}
					>
						MAST
					</button>
					<button
						className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
						onClick={() => setCamera("CHEMCAM")}
					>
						CHEMCAM
					</button>
					<button
						className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
						onClick={() => setCamera("MAHLI")}
					>
						MAHLI
					</button>
					<button
						className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
						onClick={() => setCamera("MARDI")}
					>
						MARDI
					</button>
					<button
						className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
						onClick={() => setCamera("NAVCAM")}
					>
						NAVCAM
					</button>
				</div>
				<div className="container mx-auto px-4 lg:px-22 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{data.map((photo, index) => (
						<div key={index} className="bg-white rounded p-3">
							<img src={photo.img_src} alt="Mars Rover" className="w-full h-64 object-cover" />
							<h4 className="text-md font-bold py-4 text-black"> Camera View: {photo.camera.full_name} </h4>
							<h4 className="text-md font-bold py-4 text-black"> Earth Date: {photo.earth_date} </h4>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default MarsRoverPhotos;
