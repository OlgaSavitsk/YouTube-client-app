import { Injectable } from '@angular/core';

import { SEARCH_ITEM, SortParam } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {
  searchItems = SEARCH_ITEM.items;
  searchInputValue: string = '';
  isDeskSortDate: boolean | undefined = false;
  isDeskSortView: boolean | undefined = false;
  isToggleSearchResult!: boolean;
  isToggleFilter!: boolean;
  sortParam: string | undefined;

  constructor() {}

  sortByDate(): void {
    this.isDeskSortDate = !this.isDeskSortDate;
    this.sortParam = SortParam.dateParam;
  }

  sortByViews(): void {
    this.isDeskSortView = !this.isDeskSortView;
    this.sortParam = SortParam.viewParam;
  }

  filterByWord(str: string): void {
    this.searchInputValue = str;
  }

  set searchResult(val: boolean) {
    this.isToggleSearchResult = val;
  }

  get searchResult(): boolean {
    return this.isToggleSearchResult;
  }

  set filter(val: boolean) {
    this.isToggleFilter = val;
  }

  get filter(): boolean {
    return this.isToggleFilter;
  }

  onClickCard(id: string) {
    return this.searchItems.find((item) => id === item.id);
  }
}
