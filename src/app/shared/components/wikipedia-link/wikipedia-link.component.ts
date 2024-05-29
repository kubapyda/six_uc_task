import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Position } from '../../types';

@Component({
  selector: 'app-wikipedia-link',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './wikipedia-link.component.html',
  styleUrl: './wikipedia-link.component.scss'
})
export class WikipediaLinkComponent {
  @Input() wikipediaUrl: string = '';
  @Input() position: Position = 'right';
}
