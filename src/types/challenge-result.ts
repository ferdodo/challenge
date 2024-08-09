import type { PuzzleName } from "./puzzle-name";

export interface ChallengeResult {
	[PuzzleName.Deciphraze]?: number;
	[PuzzleName.Cheminot]?: number;
	[PuzzleName.Tetromino]?: number;
	[PuzzleName.Shufflet]?: number;
	[PuzzleName.Unsplit]?: number;
	[PuzzleName.Unlock]?: number;
	[PuzzleName.Guirlande]?: number;
	[PuzzleName.Reliade]?: number;
	[PuzzleName.Vault]?: number;
}
