import express from "express";
import { lookupAddress } from "./data.js";

export function createServer(apiKey: string) {
	const app = express();

	/**
	 * GET /address?name=John&surname=Doe
	 * Returns the address for the given name and surname.
	 * Requires the correct API key in the 'x-api-key' header.
	 */
	app.get("/address", (req, res) => {


		// const address = lookupAddress(String(name), String(surname));
	});

	return app;
}
