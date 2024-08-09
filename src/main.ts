import { render } from "preact";
import { App } from "./components";
import "crumbs-design-system";
import type { FrontContext } from "./types";
import { createChallengeContext } from "./utils";
import { getScoreFromUrl } from "./utils";

const context: FrontContext = createChallengeContext();
const scoreFromUrl = getScoreFromUrl();

if (scoreFromUrl) {
	context.challengeResultStorage.save(scoreFromUrl);
}

// @ts-ignore
window.registerScore = (player: string, puzzle: string, score: number) => {
	context.challengeResultStorage.save({ [player]: { [puzzle]: score } });
};

render(App(context), document.body);
