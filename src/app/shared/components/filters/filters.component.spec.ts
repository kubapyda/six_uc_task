import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FiltersComponent,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit form value', () => {
    spyOn(component.onFilterChanged, 'emit');
    component.search();

    expect(component.onFilterChanged.emit).toHaveBeenCalledOnceWith(component.form.value);
  });
});
