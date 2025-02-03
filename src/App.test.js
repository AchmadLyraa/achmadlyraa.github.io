import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

beforeAll(() => {
	// Buat elemen untuk primary language icon
	const primaryIcon = document.createElement("span");
	primaryIcon.id = window.$primaryLanguageIconId || "primary-lang-icon";
	document.body.appendChild(primaryIcon);

	// Buat elemen untuk secondary language icon
	const secondaryIcon = document.createElement("span");
	secondaryIcon.id = window.$secondaryLanguageIconId || "secondary-lang-icon";
	document.body.appendChild(secondaryIcon);
});

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
});
