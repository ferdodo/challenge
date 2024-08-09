import type { ChallengeResultStorage } from "./challenge-result-storage";
import type { NicknameStorage } from "./nickname-storage";

export interface FrontContext {
	challengeResultStorage: ChallengeResultStorage;
	nicknameStorage: NicknameStorage;
}
