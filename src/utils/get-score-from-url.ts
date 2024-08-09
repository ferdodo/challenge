import type { ChallengeResult } from "../types";
import { base64UrlToChallengeResults } from "./base64url-to-challenge-results";

export function getScoreFromUrl(): Record<string, ChallengeResult> | null {
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);
	const scoreParam = params.get("score");

	if (scoreParam === null) {
		return null;
	}

	return base64UrlToChallengeResults(scoreParam);
}
