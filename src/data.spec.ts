import { describe, it, expect } from "vitest";
import { lookupAddress } from "../src/data";

describe("lookupAddress", () => {
	it("returns an address when entry exists", () => {
		expect(lookupAddress("John", "Doe")).toBe(
			"742 Evergreen Terrace, Springfield"
		);
	});

	it("returns null when no entry exists", () => {
		expect(lookupAddress("Nonexistent", "Person")).toBe(null);
	});
});
