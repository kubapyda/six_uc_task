import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable, map } from 'rxjs';
import { WikipediaData } from '../../types/wikipedia';
import { Launchpad } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(
    private http: HttpClient,
  ) { }

  getLinkToArticle(name: string, launchpad: Launchpad): Observable<Launchpad> {
    return this.http.get<WikipediaData>(`${environment.WIKIPEDIA_SEARCH}${name}`).pipe(
      map((wikipediaData: WikipediaData, idx: number) => ({
          ...launchpad,
          wikipediaLink: `${environment.WIKIPEDIA_LINK}${wikipediaData.query.search[idx].pageid}`
        })
      )
    );
  }
}
