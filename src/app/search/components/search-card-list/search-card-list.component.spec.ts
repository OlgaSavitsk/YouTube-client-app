import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCardListComponent } from './search-card-list.component';

describe('SearchCardListComponent', () => {
  let component: SearchCardListComponent;
  let fixture: ComponentFixture<SearchCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
