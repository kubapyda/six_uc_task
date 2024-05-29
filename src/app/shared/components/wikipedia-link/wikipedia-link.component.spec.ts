import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikipediaLinkComponent } from './wikipedia-link.component';

describe('WikipediaLinkComponent', () => {
  let component: WikipediaLinkComponent;
  let fixture: ComponentFixture<WikipediaLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikipediaLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WikipediaLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "Wikipedia" title', () => {
     const labelTag = fixture.debugElement.nativeElement.querySelector('.mdc-button__label');
     expect(labelTag.innerHTML).toBe(' Wikipedia ');
  });

  it('should have "wikipedia-link" class', () => {
    const aTag = fixture.debugElement.nativeElement.querySelector('.mdc-button');
    console.log(aTag.className)
    expect(aTag.className).toContain('wikipedia-link');
  });

  it('should not have "wikipedia-link" class', () => {
    component.position = 'left';
    fixture.detectChanges();
    const aTag = fixture.debugElement.nativeElement.querySelector('.mdc-button');
    console.log(aTag.className)
    expect(aTag.className).not.toContain('wikipedia-link');
  });
});
