import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FiltersData } from '../../types';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {

  @Output() onFilterChanged: EventEmitter<FiltersData> = new EventEmitter<FiltersData>();

  public form: FormGroup = this.fb.group({
    name: [''],
    region: [''],
  });

  constructor(private fb: FormBuilder) {}

  search(): void {
    this.onFilterChanged.emit(this.form.value);
  }
}
