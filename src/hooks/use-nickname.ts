import { useContext, useEffect, useState } from "preact/hooks";
import { appContext } from "../app-context";

export function useNickname(): string {
	const { nicknameStorage } = useContext(appContext);
	const [nickname, setNickname] = useState(nicknameStorage.read());

	useEffect(() => {
		const subscription = nicknameStorage.observe().subscribe(setNickname);
		return () => subscription.unsubscribe();
	}, [nicknameStorage]);

	return nickname;
}
