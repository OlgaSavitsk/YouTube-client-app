import { Component, ChangeDetectionStrategy } from '@angular/core';

import YoutubeService from '@youtube/services/youtube.service';

@Component({
  selector: 'app-header-controls',
  templateUrl: './header-controls.component.html',
  styleUrls: ['./header-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderControlsComponent {
  isToggleFilter: boolean = false;
  isToggleResult: boolean = false;

  constructor(private youtubeService: YoutubeService) {}

  onToggleResult(e: Event): void {
    e.preventDefault();
    this.isToggleResult = !this.isToggleResult;
    this.youtubeService.isToggleSearchResult = this.isToggleResult;
  }

  onToggleFilter(): void {
    this.isToggleFilter = !this.isToggleFilter;
    this.youtubeService.isToggleFilter = this.isToggleFilter;
  }
}
