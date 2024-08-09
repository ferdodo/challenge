import { Subject } from "rxjs";
import type { Observable } from "rxjs";
import type { NicknameStorage } from "../types/nickname-storage";

export function createNicknameStorage(): NicknameStorage {
	const subject = new Subject<string>();

	return {
		read(): string {
			return localStorage.getItem("nickname") || "";
		},
		save(nickname: string) {
			subject.next(nickname);
			localStorage.setItem("nickname", nickname);
		},
		observe(): Observable<string> {
			return subject.asObservable();
		},
	};
}
