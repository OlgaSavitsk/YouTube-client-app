import { Component, OnInit } from '@angular/core';
import { ToggleService } from '@core/services/toggle.service';

import { IDesk, sortDesk } from '@youtube/pipes/sort.pipe';
import { SEARCH_ITEM, SortParam } from 'src/app/app.constants';

@Component({
  selector: 'app-card-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultPageComponent implements OnInit {
  isToggleFilter!: boolean;
  isToggleResult!: boolean;
  searchItems = SEARCH_ITEM.items;
  sortDesk: IDesk = sortDesk;
  searchInputValue: string = '';
  isDeskSortDate: boolean | undefined;
  isDeskSortView: boolean | undefined;
  sortParam: string | undefined;

  constructor(public toggleService: ToggleService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.isToggleResult = this.toggleService.toggleSearchResult;
    this.isToggleFilter = this.toggleService.toggleFilter;
  }

  sortByDate(): void {
    sortDesk.date = !sortDesk.date;
    this.isDeskSortDate = sortDesk.date;
    this.sortParam = SortParam.date;
  }

  sortByViews(): void {
    sortDesk.view = !sortDesk.view;
    this.isDeskSortView = sortDesk.view;
    this.sortParam = SortParam.view;
  }

  sorBytWord(str: string): void {
    this.searchInputValue = str;
  }
}
