import type { ChallengeResult } from "../types";

export function challengeResultsToBase64Url(
	obj: Record<string, ChallengeResult>,
): string {
	const jsonString = JSON.stringify(obj);
	const base64String = btoa(unescape(encodeURIComponent(jsonString)));

	const base64UrlString = base64String
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=+$/, "");

	return base64UrlString;
}
