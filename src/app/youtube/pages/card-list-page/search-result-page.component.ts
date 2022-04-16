import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
} from '@angular/core';

import { SearchResultStateService } from '@youtube/services/search-result-state.service';
import YoutubeService from '@youtube/services/youtube.service';

@Component({
  selector: 'app-card-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchResultPageComponent implements DoCheck {
  isToggleFilter!: boolean;
  isToggleResult!: boolean;
  filterValue: string = '';
  isDeskSortDate: boolean | undefined;
  isDeskSortView: boolean | undefined;
  sortParam: string | undefined;

  constructor(
    private youtubeService: YoutubeService,
    private changeDetectorRef: ChangeDetectorRef,
    public httpStateService: SearchResultStateService,
  ) {}

  ngDoCheck(): void {
    if (this.youtubeService) {
      this.changeDetectorRef.markForCheck();
      this.isToggleResult = this.youtubeService.searchResult;
      this.isToggleFilter = this.youtubeService.filter;
      this.isDeskSortDate = this.youtubeService.isDeskSortDate;
      this.isDeskSortView = this.youtubeService.isDeskSortView;
      this.filterValue = this.youtubeService.filterValue;
      this.sortParam = this.youtubeService.sortParam;
    }
  }
}
