import { Component } from '@angular/core';

import { SEARCH_ITEM } from './app.constants';
import { IDesk, sortDesk } from './youtube/pipes/sort.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  searchItems = SEARCH_ITEM.items;
  sortDesk: IDesk = sortDesk;
  searchInputValue: string = '';
  isDeskSortDate: boolean | undefined;
  isDeskSortView: boolean | undefined;
  sortParam: string | undefined;

  sortByDate(): void {
    sortDesk.date = !sortDesk.date;
    this.isDeskSortDate = sortDesk.date;
    this.sortParam = 'date';
  }

  sortByViews(): void {
    sortDesk.view = !sortDesk.view;
    this.isDeskSortView = sortDesk.view;
    this.sortParam = 'view';
  }

  sorBytWord(str: string): void {
    this.searchInputValue = str;
  }
}
