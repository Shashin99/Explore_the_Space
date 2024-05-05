import React, { useState, useEffect } from "react";
import BgVideo3 from "../../assets/videos/apod_bg.mp4";

export default function Main(props) {
	const { data } = props;

	return (
		<div className="imgContainer flex items-center justify-center h-screen">
			<div className="video-container">
				<video autoPlay loop muted playsInline className="bg-video">
					<source src={BgVideo3} type="video/mp4" />
				</video>
			</div>
			<div className="max-w-full max-h-full overflow-hidden rounded-lg border-4 border-gray-800">
				<img
					src={data.hdurl}
					alt={data.title || "bg-img"}
					className="bgImage object-contain"
					style={{ opacity: "0.9" }}
				/>
			</div>
		</div>
	);
}
