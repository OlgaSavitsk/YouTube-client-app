import { Component, ChangeDetectionStrategy} from '@angular/core';

import YoutubeService from '@youtube/services/youtube.service';

@Component({
  selector: 'app-sort-by-words-button',
  templateUrl: './sort-by-words-button.component.html',
  styleUrls: ['./sort-by-words-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SortByWordsButtonComponent {
  searchInputValue: string = '';

  constructor(private youtubeService: YoutubeService) {}

  inputValue(searchInputValue: string) {
    this.youtubeService.sorBytWord(searchInputValue);
  }
}
