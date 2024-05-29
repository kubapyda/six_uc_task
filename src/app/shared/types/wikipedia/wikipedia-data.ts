import { WikipediaContinue } from './wikipedia-continue';
import { WikipediaQuery } from './wikipedia-query';

export interface WikipediaData {
  batchcomplete: string;
  continue:      WikipediaContinue;
  query:         WikipediaQuery; 
}
