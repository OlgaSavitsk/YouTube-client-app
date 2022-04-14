import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  DoCheck,
} from '@angular/core';

import YoutubeService from '@youtube/services/youtube.service';

@Component({
  selector: 'app-sort-buttons',
  templateUrl: './sort-buttons.component.html',
  styleUrls: ['./sort-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SortButtonsComponent implements DoCheck {
  sortDeskDate: boolean | undefined;
  sortDeskView: boolean | undefined;
  toggleArrowDate: boolean = false;
  toggleArrowView: boolean = false;

  constructor(
    private youtubeService: YoutubeService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngDoCheck(): void {
    if (this.youtubeService) {
      this.changeDetectorRef.markForCheck();
      this.sortDeskDate = this.youtubeService.isDeskSortDate;
      this.sortDeskView = this.youtubeService.isDeskSortView;
    }
  }

  sortDate() {
    this.youtubeService.sortByDate();
    this.toggleArrowDate = true;
    this.toggleArrowView = false;
  }

  sortViews() {
    this.youtubeService.sortByViews();
    this.toggleArrowView = true;
    this.toggleArrowDate = false;
  }
}
