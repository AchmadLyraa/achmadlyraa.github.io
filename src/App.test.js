import React from "react";
import ReactDOM from "react-dom"; // Pastikan baris ini ada
import { render } from "@testing-library/react";
import App from "./App";

// Buat elemen yang diharapkan agar tidak null
beforeAll(() => {
	const primaryLangIcon = document.createElement("div");
	primaryLangIcon.id = window.$primaryLanguageIconId || "primary-lang-icon";
	document.body.appendChild(primaryLangIcon);

	const secondaryLangIcon = document.createElement("div");
	secondaryLangIcon.id =
		window.$secondaryLanguageIconId || "secondary-lang-icon";
	document.body.appendChild(secondaryLangIcon);
});

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
});
