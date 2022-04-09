import { Component, ChangeDetectionStrategy } from '@angular/core';

import YoutubeService from '@youtube/services/youtube.service';
import { IDesk, sortDesk } from 'src/app/youtube/pipes/sort.pipe';

@Component({
  selector: 'app-sort-buttons',
  templateUrl: './sort-buttons.component.html',
  styleUrls: ['./sort-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SortButtonsComponent {
  sortDesk: IDesk = sortDesk;
  toggleArrowDate: boolean = false;
  toggleArrowView: boolean = false;

  constructor(private youtubeService: YoutubeService) {}

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
