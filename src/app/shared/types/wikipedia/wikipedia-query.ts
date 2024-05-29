import { WikipediaSearch } from './wikipedia-search';
import { WikipediaSearchinfo } from './wikipedia-search-info';

export interface WikipediaQuery {
  searchinfo: WikipediaSearchinfo;
  search:     WikipediaSearch[];
}
