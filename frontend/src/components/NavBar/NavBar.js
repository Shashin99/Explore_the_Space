import React from "react";
import Logo from "../../assets/imges/nav_logo.png";
import Swal from "sweetalert2";

const Navbar = () => {
	const isLoggedIn = false;

	const handleLinkClick = (e) => {
		if (!isLoggedIn) {
			e.preventDefault();
			Swal.fire({
				title: "Please Sign In to access this page",
				icon: "warning",
				customClass: {
					container: "borderless-swal",
					confirmButton: "btn btn-primary",
				},
			}).then(() => {
				window.location.href = "/login";
			});
		}
	};

	return (
		<>
			<nav data-aos="fade-down" className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0">
				<div className="container">
					<div className="flex justify-between items-center">
						<div className="flex items-center gap-4 text-white font-bold text-2xl">
							<img src={Logo} alt="Logo" className="w-10" />
							<span> MY SPACE WORLD </span>
						</div>
						<div className="text-white hidden sm:block">
							<ul className="flex items-center gap-6 text-xl py-4">
								<li>
									<a href="/"> Home </a>
								</li>
								<li>
									<a href="/apod"> Astronomy Picture of the Day </a>
								</li>
								<li>
									<a href="/mars_rover" onClick={handleLinkClick}>
										{" "}
										Mass Rover{" "}
									</a>
								</li>
							</ul>
						</div>
						<div>
							<a href="/login">
								<button className="text-white border-2 border-white px-3 py-1 rounded-md"> Login </button>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
