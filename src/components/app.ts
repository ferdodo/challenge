import { html } from "htm/preact";
import { appContext } from "../app-context";
import type { FrontContext } from "../types";
import { getChallenge } from "../utils";
import { Leaderboard } from "./leaderboard";
import { Nickname } from "./nickname";
import { PuzzleButton } from "./puzzle-button";
import { Share } from "./share";

export function App(context: FrontContext) {
	return html`
		<${appContext.Provider} value=${context}>
			<crumbs-panel panel-title="Challenge">
				<crumbs-p>
					<${Nickname} />
					<h1>Challenge du jour</h1>
					<p> Completez les trois puzzles pour etre classé sur le challenge du jour. </p>
					${getChallenge().map(PuzzleButton)}
					<${Leaderboard} />
					<${Share} />
				</crumbs-p>
			</crumbs-panel>
		<//>
	`;
}
