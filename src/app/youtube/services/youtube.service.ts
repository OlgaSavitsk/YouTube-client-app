import { Injectable } from '@angular/core';
import { sortDesk } from '@youtube/pipes/sort.pipe';
import { SEARCH_ITEM, SortParam } from 'src/app/app.constants';

@Injectable()
export default class YoutubeService {
  searchItems = SEARCH_ITEM.items;
  searchInputValue: string = '';
  isDeskSortDate: boolean | undefined;
  isDeskSortView: boolean | undefined;
  sortParam: string | undefined;

  constructor() { }

  sortByDate(): void {
    sortDesk.date = !sortDesk.date;
    this.isDeskSortDate = sortDesk.date;
    this.sortParam = SortParam.dateParam;
  }

  sortByViews(): void {
    sortDesk.view = !sortDesk.view;
    this.isDeskSortView = sortDesk.view;
    this.sortParam = SortParam.viewParam;
  }

  filterByWord(str: string): void {
    this.searchInputValue = str;
  }

  onClickCard(id: string) {
    return this.searchItems.find((item) => id === item.id);
  }
}
