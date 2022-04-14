import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
} from '@angular/core';

import YoutubeService from '@youtube/services/youtube.service';
import { SEARCH_ITEM } from 'src/app/app.constants';

@Component({
  selector: 'app-card-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchResultPageComponent implements DoCheck {
  isToggleFilter!: boolean;
  isToggleResult!: boolean;
  searchItems = SEARCH_ITEM.items;
  searchInputValue: string = '';
  isDeskSortDate: boolean | undefined;
  isDeskSortView: boolean | undefined;
  sortParam: string | undefined;

  constructor(
    private youtubeService: YoutubeService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngDoCheck(): void {
    if (this.youtubeService) {
      this.changeDetectorRef.markForCheck();
      this.isToggleResult = this.youtubeService.searchResult;
      this.isToggleFilter = this.youtubeService.filter;
      this.isDeskSortDate = this.youtubeService.isDeskSortDate;
      this.isDeskSortView = this.youtubeService.isDeskSortView;
      this.searchInputValue = this.youtubeService.searchInputValue;
      this.sortParam = this.youtubeService.sortParam;
    }
  }
}
