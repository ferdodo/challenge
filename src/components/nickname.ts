import { html } from "htm/preact";
import { useContext } from "preact/hooks";
import { appContext } from "../app-context";
import { useNickname } from "../hooks";

interface CustomInputEvent extends InputEvent {
	originalTarget: HTMLInputElement;
}

export function Nickname() {
	const context = useContext(appContext);
	const nickname = useNickname();

	function handleInput(e: CustomInputEvent) {
		context.nicknameStorage.save(e.originalTarget.value);
	}

	return html`
        <div>
            <crumbs-p>
                <h1> Votre pseudo </h1>
            </crumbs-p>

            <label>
                <crumbs-input
                    value=${nickname}
                    oninput=${handleInput}>
                </crumbs-input>
            </label>
        </div>
    `;
}
