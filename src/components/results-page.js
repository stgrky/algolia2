import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import {
  searchBox,
  hits,
  pagination,
  refinementList,
} from 'instantsearch.js/es/widgets';

import { resultHit } from '../templates/result-hit'; // Adjust the path as needed

/**
 * @class ResultsPage
 * @description Instant Search class to display content on main page.
 */
class ResultPage {
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }
  // eslint-disable-next-line jsdoc/require-description
  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @returns {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      'E2MEGW0SYT',
      'ad10077148ca11dd0d323556980bff49'
    );

    this._searchInstance = instantsearch({
      indexName: 'products',
      searchClient: this._searchClient,
      insights: true,
    });
  }

  // eslint-disable-next-line jsdoc/require-description
  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @returns {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      searchBox({
        container: '#searchbox',
      }),
      hits({
        container: '#hits',
        templates: {
          item: resultHit, // Use the imported template
        },
      }),
      pagination({
        container: '#pagination',
      }),
      refinementList({
        container: '#brand-facet',
        attribute: 'brand',
      }),
      refinementList({
        container: '#categories-facet',
        attribute: 'categories',
      }),
    ]);
  }

  // eslint-disable-next-line jsdoc/require-description
  /**
   * @private
   * Starts instant search after widgets are registered
   * @returns {void}
   */
  _startSearch() {
    this._searchInstance.start();
  }
}

export default ResultPage;
