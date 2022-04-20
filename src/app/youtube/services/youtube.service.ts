import { Injectable } from '@angular/core';

import { SortParam } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {
  filterValue: string = '';
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
    this.filterValue = str;
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

  /* onClickCard(id: string): SearchItem | undefined {
    return this.searchItems.find((item: SearchItem) => id === item.id);
  } */
}
