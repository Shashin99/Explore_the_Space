import React, { useState } from "react";
import axios from "axios";
import bgVideo from "../../assets/videos/earth-bg.mp4";
import Swal from "sweetalert2";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = () => {
		const body = {
			email,
			password,
		};
	
		axios
			.post(`https://explore-the-space-6sm3.onrender.com/api/users/login`, body)
			.then((res) => {
				if (res.data.message == "Login Successfull") {
					Swal.fire({
						title: "Login successful",
						icon: "success",
						customClass: {
							container: 'borderless-swal', // Apply custom borderless style
							confirmButton: "btn btn-primary"
						},
						theme: "dark"
					}).then(() => {
						localStorage.setItem("token", res.data.token);
						window.location = "/home";
					});
				} else if (res.data.message == "Incorrect password") {
					Swal.fire({
						title: "Incorrect Password",
						icon: "error",
						customClass: {
							container: 'borderless-swal', // Apply custom borderless style
							confirmButton: "btn btn-primary"
						},
						theme: "dark"
					});
				} else if (res.data.message == "Invalid email") {
					Swal.fire({
						title: "Invalid Email",
						icon: "error",
						customClass: {
							container: 'borderless-swal', // Apply custom borderless style
							confirmButton: "btn btn-primary"
						},
						theme: "dark"
					});
				}
			})
			.catch((err) => {
				console.log(err);
				Swal.fire({
					title: "Error occurred",
					icon: "error",
					customClass: {
						container: 'borderless-swal', // Apply custom borderless style
						confirmButton: "btn btn-primary"
					},
					theme: "dark"
				});
			});
	
	};

	return (
		<div>
			<div>
				<section className="bg-cover bg-center h-screen flex items-center justify-center">
					<div className="video-container">
						<video autoPlay loop muted playsInline className="bg-video">
							<source src={bgVideo} type="video/mp4" />
						</video>
					</div>
					<div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 inset-0 bg-black opacity-70 border-5 border-black rounded-lg dark:bg-black dark:opacity-70 dark:border-white font-bold">
						{/* <div className="absolute inset-0 bg-white opacity-50 rounded-lg dark:bg-black dark:opacity-50"></div> */}
						{/* <a href="/clientlogin"></a> */}
						<div className="w-full bg-transparent rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 card">
							<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
								<h1 className="text-lg font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
									Sign In Here
								</h1>
								<form
									className="space-y-4 md:space-y-6"
									action=""
									onSubmit={(e) => {
										e.preventDefault();
										signIn();
									}}
									autocomplete="off"
								>
									<div>
										<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Your email
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
									<button
										type="submit"
										className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm w-full py-2.5 text-center me-2 mb-2 mt-2"
									>
										Sign in
									</button>
									<p className="text-sm font-light text-gray-500 dark:text-gray-400 dark:text-light">
										Don’t have an account yet?{" "}
										<a href="/register" className="font-medium text-primary-600 hover:text-yellow-500 hover:underline">
											Sign up
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
