import { createContext } from "preact";
import type { FrontContext } from "./types";
import { createChallengeContext } from "./utils";

export const appContext = createContext<FrontContext>(createChallengeContext());
