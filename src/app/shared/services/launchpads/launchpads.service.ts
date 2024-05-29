import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launchpad } from '../../types/spaceX';
import { environment } from '../../../../environments/environment';
import { FiltersData, Paginate } from '../../types';
import { PageEvent } from '@angular/material/paginator';
import { QueryLaunchpad } from '../../types/global/qury-launchpad';

@Injectable({
  providedIn: 'root'
})
export class LaunchpadsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllLaunchpadsQuery(body?: FiltersData, options?: PageEvent): Observable<Paginate<Launchpad>> {
    return this.http.post<Paginate<Launchpad>>(`${environment.SPACEX}v4/launchpads/query`, {
      query: this.prepareQuery(body),
      options: {
        page: (options?.pageIndex ?? 0) + 1,
        limit: options?.pageSize,
        populate: [
          {
            path: 'launches'
          }
        ]
      }
    });
  }

  private prepareQuery(body?: FiltersData): QueryLaunchpad {
    return body?.name ? {
      upcoming: true,
      $text: {
        $search: body.name
      }
    } : {} as QueryLaunchpad;
  }
}
