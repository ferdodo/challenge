import type { Observable } from "rxjs";
import { Subject } from "rxjs";

import type {
	ChallengeResult,
	ChallengeResultStorage,
	PuzzleName,
} from "../types";

import { getDate } from "./get-date";

export function createChallengeResultStorage(): ChallengeResultStorage {
	const subject = new Subject<Record<string, ChallengeResult>>();

	return {
		read(): Record<string, ChallengeResult> {
			const date = getDate();
			const key = `challenge-${date}`;
			const serialized = localStorage.getItem(key);

			if (!serialized) {
				return {};
			}

			return JSON.parse(serialized) as Record<string, ChallengeResult>;
		},
		save(challenge: Record<string, ChallengeResult>) {
			const date = getDate();
			const key = `challenge-${date}`;
			const serialized = localStorage.getItem(key);

			const updated = serialized
				? (JSON.parse(serialized) as Record<string, ChallengeResult>)
				: {};

			for (const player of Object.keys(challenge)) {
				for (const puzzle of Object.keys(challenge[player])) {
					updated[player] ||= {};
					const score = challenge[player][puzzle as PuzzleName];

					if (score === undefined) {
						continue;
					}

					updated[player][puzzle as PuzzleName] = score;
				}
			}

			subject.next(updated);
			localStorage.setItem(key, JSON.stringify(updated));
		},
		observe(): Observable<Record<string, ChallengeResult>> {
			return subject.asObservable();
		},
	};
}
