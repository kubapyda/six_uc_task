import { Component, OnInit } from '@angular/core';
import { FiltersComponent, TableComponent } from '../../shared/components';
import { FiltersData, Launchpad, Paginate } from '../../shared/types';
import { LaunchpadsService } from '../../shared/services/launchpads/launchpads.service';
import { WikipediaService } from '../../shared/services/wikipedia/wikipedia.service';
import { PageEvent } from '@angular/material/paginator';
import { Observable, forkJoin, map, mergeMap, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TableComponent,
    FiltersComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public dataSource: Paginate<Launchpad> = {} as Paginate<Launchpad>;
  public displayedColumns: string[] = ['name', 'region', 'launches', 'wikipedia'];

  private filtersData: FiltersData = {} as FiltersData;
  private pageEvent: PageEvent = { pageIndex: 0, pageSize: 5, length: 0 };

  constructor(
    private launchpadsService: LaunchpadsService,
    private wikipediaService: WikipediaService
  ) {}

  public ngOnInit(): void {
    this.getAllLaunchpads(this.filtersData, this.pageEvent);
  }

  public onFilterChanged(filter: FiltersData): void {
    this.filtersData = filter;
    this.getAllLaunchpads(filter, this.pageEvent);
  }

  public onPageChanged(evt: PageEvent): void {
    this.pageEvent = evt;
    this.getAllLaunchpads(this.filtersData, evt)
  }

  private getAllLaunchpads(data?: FiltersData, options?: PageEvent): void {
    this.launchpadsService.getAllLaunchpadsQuery(data, options).pipe(
      tap((launchpads: Paginate<Launchpad>) => this.dataSource = launchpads),
      map((launchpads: Paginate<Launchpad>) => this.getWikipediaLinkForLaunchpads(launchpads)),
      mergeMap((requests: Paginate<Observable<Launchpad>>) => forkJoin(requests.docs))
    ).subscribe((launchpadsData: Launchpad[]) => {
      this.dataSource.docs = launchpadsData; 
    });
  }

  private getWikipediaLinkForLaunchpads(launchpads: Paginate<Launchpad>): Paginate<Observable<Launchpad>> {
    return {
      ...launchpads,
      docs: launchpads.docs.map((launchpad: Launchpad) =>
        this.wikipediaService.getLinkToArticle(launchpad.full_name, launchpad)
      )
    };
  }
}