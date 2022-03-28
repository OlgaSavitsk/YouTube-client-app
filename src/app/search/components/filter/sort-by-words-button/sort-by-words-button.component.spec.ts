import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByWordsButtonComponent } from './sort-by-words-button.component';

describe('SortByWordsButtonComponent', () => {
  let component: SortByWordsButtonComponent;
  let fixture: ComponentFixture<SortByWordsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortByWordsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByWordsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
