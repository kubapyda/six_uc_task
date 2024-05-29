import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { WikipediaLinkComponent } from '../wikipedia-link/wikipedia-link.component';
import { Launches } from '../../types';

@Component({
  selector: 'app-launches-dialog',
  standalone: true,
  imports: [
    DatePipe,
    MatDialogContent,
    MatDividerModule,
    MatListModule,
    MatDialogTitle,
    WikipediaLinkComponent
  ],
  templateUrl: './launches-dialog.component.html',
  styleUrl: './launches-dialog.component.scss'
})
export class LaunchesDialogComponent implements OnInit {

  public launchesData: Launches[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { launches: Launches[] }) {}

  public ngOnInit(): void {
    this.launchesData = this.data?.launches;
  }
}
