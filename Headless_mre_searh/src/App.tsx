import { useEffect } from 'react'
import SearchBox from "./components/SearchBox";
import ResultList from "./components/ResultList";

import {
  searchBox as SearchBoxController,
  resultList as ResultListController,
} from './controllers/controllers'
import './App.css'

import { headlessEngine } from "./Engine";

let didInit = false;

function App() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      headlessEngine.executeFirstSearch();
    }
  }, []);

  return (
    <>
      <h1>Coveo Headless Search MRE</h1>
      <div className="search-section">
          <SearchBox controller={SearchBoxController} />
      </div>
      <div className="main-section">
          <div className="facet-section column">
          </div>
          <div className="results-section column">
            <ResultList controller={ResultListController} />
          </div>
      </div>
    </>
  )
}

export default App;
