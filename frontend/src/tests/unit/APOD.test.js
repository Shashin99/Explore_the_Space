import React from "react";
import { render, screen } from "@testing-library/react";
import AstronomyPictureOfDay from "../../pages/APOD/Apod";

describe("AstronomyPictureOfDay Component - Unit Tests", () => {
	test("renders AstronomyPictureOfDay component with loading text", () => {
		render(<AstronomyPictureOfDay />);
	});
});
