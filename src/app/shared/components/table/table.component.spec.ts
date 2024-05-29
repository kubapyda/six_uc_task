import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

describe('TableComponent', () => {
  let dialogService: MatDialog;
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TableComponent,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    dialogService = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit page event', () => {
    const pageEvent: PageEvent = { pageIndex: 1, pageSize: 5, length: 5 };
    spyOn(component.onPageEvent, 'emit');
    component.handlePageEvent(pageEvent);

    expect(component.onPageEvent.emit).toHaveBeenCalledOnceWith(pageEvent);
  });

  it('should open dialog', () => {
    spyOn(dialogService, 'open');
    component.openLaunchesDialog([]);

    expect(dialogService.open).toHaveBeenCalled();
  })
});
