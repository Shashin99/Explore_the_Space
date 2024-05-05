export default function Footer(props) {
	const { showModal, handleToggleModal, data } = props;

	return (
		<footer>
			<div className="bgGradient"></div>
			<div>
				<h1 style={{ fontWeight: "bold" }}> Astronomy Picture of the Day </h1>
				<h2 style={{ fontWeight: "bold" }}>{data?.title}</h2>
			</div>
			<button onClick={handleToggleModal}>
				<i className="fa-solid fa-circle-info"></i>
			</button>
		</footer>
	);
}
