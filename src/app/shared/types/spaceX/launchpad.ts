import { Images } from './images';
import { Launches } from './launches';

export interface Launchpad {
  images:           Images;
  name:             string;
  full_name:        string;
  locality:         string;
  region:           string;
  latitude:         number;
  longitude:        number;
  launch_attempts:  number;
  launch_successes: number;
  rockets:          string[];
  timezone:         string;
  launches:         Launches[];
  status:           string;
  details:          string;
  id:               string;
  wikipediaLink?:   string;
}
