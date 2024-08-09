import type { FrontContext } from "../types";
import { createChallengeResultStorage } from "./create-challenge-result-storage";
import { createNicknameStorage } from "./create-nickname-storage";

export function createChallengeContext(): FrontContext {
	return {
		challengeResultStorage: createChallengeResultStorage(),
		nicknameStorage: createNicknameStorage(),
	};
}
