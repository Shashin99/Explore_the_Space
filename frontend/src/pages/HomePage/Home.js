import React, { useState, useEffect } from "react";
import "./home.css";

import BgVideo1 from "../../assets/videos/Home_Background.mp4";
import Navbar from "../../components/NavBar/NavBar";

export default function HomePage() {

	const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        // Clean up the interval
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures that effect runs only once on component mount


	return (
		<div className="Home">
			<div className="video-container">
				<video autoPlay loop muted playsInline className="bg-video">
					<source src={BgVideo1} type="video/mp4" />
				</video>
			</div>
			<Navbar />
			<Navbar />
			<div className="content absolute bottom-0 right-0 p-4">
				<div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="text-white space-y-4 lg:pr-36">
					<div>
					<h4 className="text-3xl font-bold">
						{dateTime.toLocaleString()} </h4> </div>
						<h1 className="text-5xl font-bold"> EXPLORE THE SPACE </h1>
						<p className="text-justify">
							Nasa is the best place to explore the space. You can find the latest news, images, videos and many more
							about the space. You can also find the information about the planets, stars, galaxies and many more. You
							can also find the information about the upcoming events and missions. You can also find the information
							about the astronauts and their missions. You can also find the latest images and videos of the space. Get
							ready to explore the space with Nasa.
						</p>
						<br />
						<a href="/register">
							<button
								type="button"
								class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
							>
								Get Started Here
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
