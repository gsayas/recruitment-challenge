export type Person = {
	name: string;
	surname: string;
};

export const addressBook: Record<string, string> = {
	"John:Doe": "742 Evergreen Terrace, Springfield",
	"Jane:Doe": "31 Spooner Street, Quahog",
	"Ada:Lovelace": "12 Regent Street, London"
};

export function lookupAddress(name: string, surname: string): string | null {
	return addressBook[`${name}:${surname}`] ?? null;
}
