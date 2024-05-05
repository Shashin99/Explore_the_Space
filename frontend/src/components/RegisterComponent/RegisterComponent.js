import React from "react";
import axios from "axios";
import bgVideo from "../../assets/videos/earth-bg.mp4";
import Navbar from "../NavBar/NavBar";
import Swal from "sweetalert2";

export default function Register() {
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const SignUp = () => {
		const body = {
			firstName,
			lastName,
			email,
			password,
		};

		axios
			.post(`https://explore-the-space-6sm3.onrender.com/api/users/add`, body)
			.then((res) => {
				Swal.fire({
					title: "Registration Successful",
					icon: "success",
					customClass: {
						container: "borderless-swal", // Apply custom borderless style
						confirmButton: "btn btn-primary",
					},
				}).then(() => {
					window.location.href = "/login";
				});
			})
			.catch((err) => {
				Swal.fire({
					title: "Registration Failed",
					icon: "error",
					customClass: {
						container: "borderless-swal", // Apply custom borderless style
						confirmButton: "btn btn-primary",
					},
				});
			});
	};

	return (
		<div>
			<Navbar />
			<div>
				<section className="bg-cover bg-center h-screen flex items-center justify-center fixed top-0 left-0 w-full mt-10">
					<div className="fixed top-0 left-0 z-0 w-full h-full overflow-hidden">
						<video
							autoPlay
							loop
							muted
							playsInline
							className="min-w-full min-h-full max-w-none absolute top-0 left-0 object-cover"
						>
							<source src={bgVideo} type="video/mp4" />
						</video>
					</div>
					<div className="w-full max-w-4xl rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 inset-0 bg-black opacity-70 border-5 border-black rounded-lg dark:bg-black dark:opacity-70 dark:border-white font-bold">
						<div className="w-full bg-transparent rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 card">
							<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
								<h1 className="text-lg font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
									Sign Up Here
								</h1>
								<form
									className="space-y-4 md:space-y-3 "
									action=""
									onSubmit={(e) => {
										e.preventDefault();
										SignUp();
									}}
									autocomplete="off"
								>
									<div>
										<label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											First Name
										</label>
										<input
											type="text"
											name="firstname"
											id="firstname"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="John"
											onChange={(e) => {
												setFirstName(e.target.value);
											}}
											required
										/>
									</div>
									<div>
										<label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Last Name
										</label>
										<input
											type="text"
											name="lastname"
											id="lastname"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Doe"
											onChange={(e) => {
												setLastName(e.target.value);
											}}
											required
										/>
									</div>
									<div>
										<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Email
										</label>
										<input
											type="email"
											name="email"
											id="email"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="someone@mail.com"
											onChange={(e) => {
												setEmail(e.target.value);
											}}
											required
										/>
									</div>
									<div>
										<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Password
										</label>
										<input
											type="password"
											name="password"
											id="password"
											placeholder="••••••••"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											onChange={(e) => {
												setPassword(e.target.value);
											}}
											required
										/>
									</div>
									<br />
									<button
										type="submit"
										className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm w-full py-2.5 text-center me-2 mb-2 mt-2"
									>
										Sign Up
									</button>
									<p className="text-sm font-bod text-gray-500 dark:text-gray-400 dark:text-light">
										Do you have an account?{" "}
										<a href="/login" className="font-medium text-primary-600 hover:text-yellow-500 hover:underline">
											Sign In
										</a>
									</p>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
