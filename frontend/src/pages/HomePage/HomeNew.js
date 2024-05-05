import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

import BgVideo1 from "../../assets/videos/Home_Background.mp4";
import Navbarhome from "../../components/NavBar/NavBarHome";

export default function HomePageNew() {
	const [dateTime, setDateTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setDateTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token == null) {
			window.location.href = "/login";
		} else {
			const headers = {
				token: token,
			};
			axios
				.post(
					`http://localhost:8080/api/users/verify`,
					{},
					{
						headers: headers,
					}
				)
				.then((res) => {
					if (res.data.message == "Error Occured") {
						console.log(res.data.message);
						alert("Login expired. you have been logged out");
						window.location.href = "/login";
					}
				})
				.catch((err) => {
					alert("Error Occured");
					window.location.href = "/";
				});
		}
	}, []);

	return (
		<div className="Home">
			<div className="video-container">
				<video autoPlay loop muted playsInline className="bg-video">
					<source src={BgVideo1} type="video/mp4" />
				</video>
			</div>
			<Navbarhome />
			<Navbarhome />
			<div className="content absolute bottom-0 right-0 p-4">
				<div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="text-white space-y-4 lg:pr-36">
						<div>
							<h4 className="text-3xl font-bold">{dateTime.toLocaleString()} </h4>{" "}
						</div>
						<h1 className="text-5xl font-bold"> EXPLORE THE SPACE </h1>
						<p className="text-justify">
							Nasa is the best place to explore the space. You can find the latest news, images, videos and many more
							about the space. You can also find the information about the planets, stars, galaxies and many more. You
							can also find the information about the upcoming events and missions. You can also find the information
							about the astronauts and their missions. You can also find the latest images and videos of the space. Get
							ready to explore the space with Nasa.
						</p>
						<br />
						<a href=" ">
							<button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
								<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
									Contact Us For More Information
								</span>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
