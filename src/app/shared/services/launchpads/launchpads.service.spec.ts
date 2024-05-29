import { TestBed } from '@angular/core/testing';

import { LaunchpadsService } from './launchpads.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('LaunchpadsService', () => {
  let service: LaunchpadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(LaunchpadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
