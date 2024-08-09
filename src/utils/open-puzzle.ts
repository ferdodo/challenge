const subWindows: Window[] = [];

export function openPuzzle(puzzle: string) {
	const url = `/${puzzle}`;

	const subWindow = window.open(
		url,
		puzzle,
		[
			"width=800",
			"height=800",
			"menubar=no",
			"toolbar=no",
			"location=no",
			"status=no",
			"resizable=yes",
			"scrollbars=yes",
		].join(","),
	);

	if (subWindow) {
		subWindows.push(subWindow);
	}

	window.onunload = () => {
		for (const subWindow of subWindows) {
			subWindow.close();
		}
	};
}
