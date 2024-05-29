import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Launches, Launchpad, Paginate } from '../../types';
import { LaunchesPipe } from '../../pipes';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { LaunchesDialogComponent } from '../launches-dialog';
import { WikipediaLinkComponent } from '../wikipedia-link/wikipedia-link.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    LaunchesPipe,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule,
    WikipediaLinkComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {

  @Output() onPageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @Input() dataSource: Paginate<Launchpad> = {} as Paginate<Launchpad>;;
  @Input() displayedColumns: string[] = [];

  constructor(public dialog: MatDialog) {}

  public handlePageEvent(pageEvt: PageEvent): void {
    this.onPageEvent.emit(pageEvt);
  }

  public openLaunchesDialog(launches: Launches[]): void {
    this.dialog.open(LaunchesDialogComponent, {
      data: { launches },
    });
  }

}
