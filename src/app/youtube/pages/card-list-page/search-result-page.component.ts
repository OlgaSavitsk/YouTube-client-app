import { Component, DoCheck } from '@angular/core';

import { ToggleService } from '@core/services/toggle.service';
import { IDesk, sortDesk } from '@youtube/pipes/sort.pipe';
import YoutubeService from '@youtube/services/youtube.service';
import { SEARCH_ITEM } from 'src/app/app.constants';

@Component({
  selector: 'app-card-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss'],
})
export default class SearchResultPageComponent implements DoCheck {
  isToggleFilter!: boolean;
  isToggleResult!: boolean;
  searchItems = SEARCH_ITEM.items;
  sortDesk: IDesk = sortDesk;
  searchInputValue: string = '';
  isDeskSortDate: boolean | undefined;
  isDeskSortView: boolean | undefined;
  sortParam: string | undefined;

  constructor(
    public toggleService: ToggleService,
    private youtubeService: YoutubeService,
  ) {}

  ngDoCheck(): void {
    this.isToggleResult = this.toggleService.searchResult;
    this.isToggleFilter = this.toggleService.filter;
    this.isDeskSortDate = this.youtubeService.isDeskSortDate;
    this.isDeskSortView = this.youtubeService.isDeskSortView;
    this.searchInputValue = this.youtubeService.searchInputValue;
    this.sortParam = this.youtubeService.sortParam;
  }
}
