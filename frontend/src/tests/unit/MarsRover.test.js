import React from "react";
import { render, screen } from "@testing-library/react";
import MarsRoverPhotos from "../../pages/MarsRoverPhotos/MarsRoverPhotos";

describe("MarsRoverPhotos Component", () => {
	test("renders MarsRoverPhotos component", () => {
		render(<MarsRoverPhotos />);

		expect(screen.getByText("Mars Rover Photos")).toBeInTheDocument();
		expect(screen.getByText("Select Camera View Here")).toBeInTheDocument();
	});
});
