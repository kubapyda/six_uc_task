import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { LaunchpadsService } from '../../shared/services/launchpads/launchpads.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Launchpad, Paginate } from '../../shared/types';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let service: LaunchpadsService;
  let fixture: ComponentFixture<HomeComponent>;
  const data: Paginate<Launchpad> = {
    "docs": [
        {
            "images": {
                "large": [
                    "https://i.imgur.com/7uXe1Kv.png"
                ]
            },
            "name": "VAFB SLC 3W",
            "full_name": "Vandenberg Space Force Base Space Launch Complex 3W",
            "locality": "Vandenberg Space Force Base",
            "region": "California",
            "latitude": 34.6440904,
            "longitude": -120.5931438,
            "launch_attempts": 0,
            "launch_successes": 0,
            "rockets": [
                "5e9d0d95eda69955f709d1eb"
            ],
            "timezone": "America/Los_Angeles",
            "launches": [],
            "status": "retired",
            "details": "SpaceX's original west coast launch pad for Falcon 1. It was used in a static fire test but was never employed for a launch, and was abandoned due to range scheduling conflicts arising from overflying other active pads.",
            "id": "5e9e4501f5090910d4566f83"
        }
    ],
    "totalDocs": 6,
    "limit": 5,
    "totalPages": 2,
    "page": 1,
    "pagingCounter": 1,
    "hasPrevPage": false,
    "hasNextPage": true,
    "prevPage": null,
    "nextPage": 2
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        BrowserAnimationsModule
      ],
      providers: [
        LaunchpadsService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LaunchpadsService);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllLaunchpadsQuery when set filters', () => {
    spyOn(service, 'getAllLaunchpadsQuery').and.returnValue(of(data));
    component.onFilterChanged({ name: 'STLTS'});

    expect(service.getAllLaunchpadsQuery).toHaveBeenCalledTimes(1);
  });

  it('should call getAllLaunchpadsQuery when set page event', () => {
    spyOn(service, 'getAllLaunchpadsQuery').and.returnValue(of(data));
    component.onPageChanged({ pageIndex: 1, pageSize: 5, length: 5 });

    expect(service.getAllLaunchpadsQuery).toHaveBeenCalledTimes(1);
  });
});
