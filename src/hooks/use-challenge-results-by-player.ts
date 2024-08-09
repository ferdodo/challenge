import { useContext, useEffect, useState } from "preact/hooks";
import { appContext } from "../app-context";
import type { ChallengeResult } from "../types";

export function useChallengeResultsByPlayer(): Record<string, ChallengeResult> {
	const { challengeResultStorage } = useContext(appContext);

	const [challengeResults, setChallengeResult] = useState(
		challengeResultStorage.read(),
	);

	useEffect(() => {
		const subscription = challengeResultStorage
			.observe()
			.subscribe(setChallengeResult);

		return () => subscription.unsubscribe();
	}, [challengeResultStorage]);

	return challengeResults;
}
