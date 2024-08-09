import type { ChallengeResult } from "../types";

export function base64UrlToChallengeResults(
	base64Url: string,
): Record<string, ChallengeResult> {
	let base64String = base64Url.replace(/-/g, "+").replace(/_/g, "/");

	const padding = base64String.length % 4;

	if (padding > 0) {
		base64String += "=".repeat(4 - padding);
	}

	const jsonString = atob(base64String);
	const obj = JSON.parse(jsonString);
	return obj;
}
