import { html } from "htm/preact";
import { render } from "preact";
import { App } from "./components";
import "crumbs-design-system";
import { appContext } from "./app-context";
import type { FrontContext } from "./types";
import { createChallengeContext } from "./utils";
import { getScoreFromUrl } from "./utils";

const context: FrontContext = createChallengeContext();
const scoreFromUrl = getScoreFromUrl();

if (scoreFromUrl) {
	context.challengeResultStorage.save(scoreFromUrl);
}

// @ts-ignore
window.registerScore = (puzzle: string, score: number) => {
	const player = context.nicknameStorage.read();
	context.challengeResultStorage.save({ [player]: { [puzzle]: score } });
};

render(
	html`<${appContext.Provider} value=${context}> <${App} /> <//>`,
	document.body,
);
