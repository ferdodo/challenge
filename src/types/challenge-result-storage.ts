import type { Observable } from "rxjs";
import type { ChallengeResult } from "./challenge-result";

export interface ChallengeResultStorage {
	read(): Record<string, ChallengeResult>;
	save(challenge: Record<string, ChallengeResult>): void;
	observe(): Observable<Record<string, ChallengeResult>>;
}
