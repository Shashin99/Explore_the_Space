import { useEffect, useState } from "react";
import Footer from "./Footer";
import Main from "./Main";
import Sidebar from "./Sidebar";
import axios from "axios";
import "./apod.css";

function Apod() {
	const [data, setData] = useState(null);
	const currentDate = new Date().toISOString().split("T")[0];
	const [showModal, setShowModal] = useState(false);

	function handleToggleModal() {
		setShowModal(!showModal);
	}

	useEffect(() => {
		let url = "";
		url = `https://api.nasa.gov/planetary/apod?api_key=E70WRgh7y4vT98mANkdYJq90kJc5PeDaSDu44KFz&date=${currentDate}`;
		axios
			.get(url)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<div className="main-container">
			{data ? (
				<Main data={data} />
			) : (
				<div className="loadingState">
					<i className="fa-solid fa-gear"></i>
				</div>
			)}
			{showModal && <Sidebar data={data} handleToggleModal={handleToggleModal} />}
			{data && <Footer data={data} handleToggleModal={handleToggleModal} />}
		</div>
	);
}

export default Apod;
