import { 
  buildSearchEngine, 
  loadFieldActions,
  SearchEngine,
} from "@coveo/headless";


const FIELDS = [
  "ec_images",
];

const registerAdditionalFields = (headlessEngine: SearchEngine) => {
  const fieldActions = loadFieldActions(headlessEngine);
  headlessEngine.dispatch(fieldActions.registerFieldsToInclude(FIELDS));
  return headlessEngine;
}

const buildEngine = buildSearchEngine({
  configuration: {
    organizationId: "barcagroupproductionkwvdy6lp",
    accessToken: "xx5a7943ef-ea52-42e5-8742-51198cc651f7"
  },
});

export const headlessEngine = registerAdditionalFields(buildEngine);