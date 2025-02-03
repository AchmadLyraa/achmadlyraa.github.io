import React from "react";
import ReactDOM from "react-dom"; // Pastikan baris ini ada
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
});
