import {
  buildSearchBox,
  buildResultList,
} from "@coveo/headless";

import { headlessEngine } from "../Engine";

export const searchBox = buildSearchBox(headlessEngine);

export const resultList = buildResultList(headlessEngine);

