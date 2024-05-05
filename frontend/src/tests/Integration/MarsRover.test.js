import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import MarsRoverPhotos from "../../pages/MarsRoverPhotos/MarsRoverPhotos";

jest.mock("axios");

describe("MarsRoverPhotos Component", () => {
	test("renders MarsRoverPhotos component with photos", async () => {
		const data = {
			photos: [
				{
					img_src: "https://example.com/image1.jpg",
					camera: { full_name: "FHAZ" },
					earth_date: "2022-05-03",
				},
				{
					img_src: "https://example.com/image2.jpg",
					camera: { full_name: "RHAZ" },
					earth_date: "2022-05-04",
				},
			],
		};

		axios.get.mockResolvedValue({ data });

		render(<MarsRoverPhotos />);

		expect(await screen.findByText("Mars Rover Photos")).toBeInTheDocument();
		expect(await screen.findByText("Select Camera View Here")).toBeInTheDocument();

		// Check if images are rendered
		// expect(await screen.findByAltText("Mars Rover")).toBeInTheDocument();

		// Check if camera view and earth date are rendered for each photo
		expect(await screen.findByText("Camera View: FHAZ")).toBeInTheDocument();
		expect(await screen.findByText("Earth Date: 2022-05-03")).toBeInTheDocument();
		expect(await screen.findByText("Camera View: RHAZ")).toBeInTheDocument();
		expect(await screen.findByText("Earth Date: 2022-05-04")).toBeInTheDocument();
	});

	test("handles camera change", async () => {
		const data = {
			photos: [
				{
					img_src: "https://example.com/image1.jpg",
					camera: { full_name: "FHAZ" },
					earth_date: "2022-05-03",
				},
			],
		};

		axios.get.mockResolvedValue({ data });

		render(<MarsRoverPhotos />);

		fireEvent.click(await screen.findByText("FHAZ"));

		expect(axios.get).toHaveBeenCalledWith(
			"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=FHAZ&api_key=E70WRgh7y4vT98mANkdYJq90kJc5PeDaSDu44KFz"
		);
	});
});
