import dotenv from "dotenv";
import { createServer } from "./server.js";

dotenv.config();

const apiKey = process.env.API_KEY;

if (!apiKey) {
	console.error("API_KEY is missing from environment");
	process.exit(1);
}

const app = createServer(apiKey);

const port = 3000;
app.listen(port, () => {
	console.log(`API running at http://localhost:${port}`);
});
