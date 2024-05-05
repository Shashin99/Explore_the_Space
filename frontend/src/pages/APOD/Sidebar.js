import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
	const { handleToggleModal, data } = props;
	const [currentTime, setCurrentTime] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(getCurrentTime());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const getCurrentTime = () => {
		const now = new Date();
		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const dayOfWeek = days[now.getDay()];
		const hours = now.getHours();
		const minutes = now.getMinutes();
		const seconds = now.getSeconds();
		const ampm = hours >= 12 ? "PM" : "AM";
		const formattedHours = hours % 12 || 12;
		return `${dayOfWeek}, ${formattedHours}:${minutes < 10 ? "0" + minutes : minutes}:${
			seconds < 10 ? "0" + seconds : seconds
		} ${ampm}`;
	};

	return (
		<div className="sidebar">
			<div onClick={handleToggleModal} className="bgOverlay"></div>
			<div className="sidebarContents">
				<h2 style={{ fontWeight: "bold" }}>{data?.title}</h2>
				<div className="descriptionContainer">
					<p className="descriptionTitle">
						{data?.date} {currentTime}
					</p>
					<p className="text-justify">{data?.explanation}</p>
				</div>

				<button>
					<Link to="/home">Back to Home</Link>
				</button>
				<button onClick={handleToggleModal}>
					<i className="fa-solid fa-arrow-right"></i>
				</button>
			</div>
		</div>
	);
}
