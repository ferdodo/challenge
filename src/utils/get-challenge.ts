import { randomizeArray } from "daily-prng";
import { PuzzleName } from "../types";

let challenge: null | string[] = null;

export function getChallenge(): string[] {
	if (challenge) {
		return challenge;
	}

	const [a, b, c] = randomizeArray(Object.values(PuzzleName));
	challenge = [a, b, c];
	return challenge;
}
