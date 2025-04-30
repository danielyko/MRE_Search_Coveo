import { 
  buildSearchEngine, 
  loadFieldActions,
  SearchEngine,
} from "@coveo/headless";

//updated dotenv
import dotenv from 'dotenv';
dotenv.config();

const FIELDS = [
  "ec_images",
];

const registerAdditionalFields = (headlessEngine: SearchEngine) => {
  const fieldActions = loadFieldActions(headlessEngine);
  headlessEngine.dispatch(fieldActions.registerFieldsToInclude(FIELDS));
  return headlessEngine;
}
// Check that required env vars are present
if (!process.env.ACCESS_TOKEN) {
  throw new Error("ACCESS_TOKEN is not defined in environment variables.");
}

const buildEngine = buildSearchEngine({
  configuration: {
    organizationId: "barcagroupproductionkwvdy6lp",
    accessToken: process.env.ACCESS_TOKEN as string,
  },
});

export const headlessEngine = registerAdditionalFields(buildEngine);