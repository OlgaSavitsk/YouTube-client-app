import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { IDesk, sortDesk } from '@core/pipes/sort.pipe';

@Component({
  selector: 'app-sort-buttons',
  templateUrl: './sort-buttons.component.html',
  styleUrls: ['./sort-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SortButtonsComponent {
  @Output() clickSortDate = new EventEmitter<boolean>();
  @Output() clickSortViews = new EventEmitter<boolean>();
  sortDesk: IDesk = sortDesk;
  toggleArrowDate: boolean = false;
  toggleArrowView: boolean = false;

  constructor() {}

  sortDate() {
    this.clickSortDate.emit();
    this.toggleArrowDate = true;
    this.toggleArrowView = false;
  }

  sortViews() {
    this.clickSortViews.emit();
    this.toggleArrowView = true;
    this.toggleArrowDate = false;
  }
}
