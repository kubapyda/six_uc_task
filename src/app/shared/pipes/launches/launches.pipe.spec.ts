import { Launches } from '../../types';
import { LaunchesPipe } from './launches.pipe';

describe('LaunchesPipe', () => {
  it('create an instance', () => {
    const pipe = new LaunchesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return string from list', () => {
    const pipe = new LaunchesPipe();
    const list: Launches[] = [
      {
        name: 'Falcon 9 Test Flight',
        links: { wikipedia: 'https://en.wikipedia.org/wiki/Falcon' },
        id: '1'
      },
      {
        name: 'COTS 2',
        links: { wikipedia: 'https://en.wikipedia.org/wiki/COTS' },
        id: '2'
      }
    ];

    expect(pipe.transform(list)).toEqual('Falcon 9 Test Flight, COTS 2');
  });
});
