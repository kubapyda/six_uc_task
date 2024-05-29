export interface WikipediaSearch {
  ns:        number;
  title:     string;
  pageid:    number;
  size:      number;
  wordcount: number;
  snippet:   string;
  timestamp: Date;
}
