import { Pipe, PipeTransform } from '@angular/core';
import { Launches } from '../../types';

@Pipe({
  name: 'launches',
  standalone: true,
  pure: true
})
export class LaunchesPipe implements PipeTransform {

  transform(value: Launches[]): string {
    return value
      .map((value: Launches) => value.name)
      .join(', ');
  }

}
