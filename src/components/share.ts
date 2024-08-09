import { html } from "htm/preact";
import { useChallengeResultsByPlayer, useNickname } from "../hooks";
import type { ChallengeResult } from "../types";
import { challengeResultsToBase64Url } from "../utils";

export function Share() {
	const nickname = useNickname();
	const challengeResultByPlayer = useChallengeResultsByPlayer();

	const myChallengeResult: Record<string, ChallengeResult> = {
		[nickname]: challengeResultByPlayer[nickname],
	};

	const notEmpty = Boolean(
		Object.keys(challengeResultByPlayer[nickname] || {}).length,
	);

	const base64UrlString = challengeResultsToBase64Url(myChallengeResult);
	const link = `https://ferdodo.github.io/challenge?score=${base64UrlString}`;

	return html`
		<div>
			<crumbs-p>
				<h1>Partage</h1>

				<p>
					Partagez ce lien avec vos amis pour les défier à battre votre score : 
				</p>

				${
					notEmpty &&
					html`
						<p>
							<a href=${link}> ${link} </a>
						</p>
					`
				}
			</crumbs-p>
		</div>
	`;
}
