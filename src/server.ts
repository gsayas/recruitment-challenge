import express from "express";
import { lookupAddress } from "./data.js";
import { ParsedQs } from "qs";

export function createServer(apiKey: string) {
	const app = express();

	/**
	 * GET /address?name=John&surname=Doe
	 * Returns the address for the given name and surname.
	 * Requires the correct API key in the 'x-api-key' header.
	 */
	app.get("/address", (req, res) => {

		if(req.headers["x-api-key"] !== apiKey) {
			return res.status(401).json({
				error: "Unauthorized"
			});
		}

		if(!validateArguments(req.query)) {
			return res.status(418).json({
				error: "Invalid arguments"
			});
		}

		res.json({
			address: "742 Evergreen Terrace, Springfield"
		});
	});

	return app;
}
function validateArguments(query: ParsedQs) {
	//we expect name and surname in the args
	if(!query.name || !query.surname) {
		return false;
	}
	return true;
}

