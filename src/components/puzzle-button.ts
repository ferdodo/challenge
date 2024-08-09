import { html } from "htm/preact";
import { openPuzzle } from "../utils";

export function PuzzleButton(puzzle: string) {
	return html`
		<crumbs-button
			onClick=${() => openPuzzle(puzzle)}>
			${puzzle}
		</crumbs-button>
	`;
}
