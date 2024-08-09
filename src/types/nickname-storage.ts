import type { Observable } from "rxjs";

export interface NicknameStorage {
	read(): string;
	save(nickname: string): void;
	observe(): Observable<string>;
}
