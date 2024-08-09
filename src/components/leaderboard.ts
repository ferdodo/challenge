import { html } from "htm/preact";
import { useChallengeResultsByPlayer } from "../hooks";
import type { ChallengeResult, PuzzleName } from "../types";
import { getChallenge } from "../utils";

export function Leaderboard() {
	const challengeResultsByPlayer = useChallengeResultsByPlayer();

	return html`
        <div>
            <crumbs-p>
                <h1>Classement</h1>

                <table style="border-spacing: 30px;">
                    <thead>
                        <tr>
                            <th> # </th>
                            <th> Joueur </th>
                            ${getChallenge().map((challenge) => html`<th>${challenge}</th>`)}
                        </tr>
                    </thead>

                    <tbody>
                        ${Object.entries(challengeResultsByPlayer).map(Row)}
                    </tbody>
                </table>
            </crumbs-p>
        </div>
    `;
}

function Row(
	[player, challengeResult]: [string, ChallengeResult],
	index: number,
) {
	return html`
        <tr>
            <td> ${index + 1} </td>
            <td> ${player} </td>
            ${getChallenge().map((puzzle) => html`<td> ${challengeResult[puzzle as PuzzleName] ?? "-"} </td>`)}
        </tr>
    `;
}
