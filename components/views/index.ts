import Music from "./Music.tsx";
import About from "./About.tsx";

import type { ViewsType } from "../../types.common.ts";

export const Views: ViewsType = {
  music: Music(),
  about: About(),
};
