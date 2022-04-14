import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Subject } from 'rxjs';

import YoutubeService from '@youtube/services/youtube.service';

@Component({
  selector: 'app-header-controls',
  templateUrl: './header-controls.component.html',
  styleUrls: ['./header-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderControlsComponent implements OnInit {
  isToggleFilter: boolean = false;
  searchValue: string = '';
  private searchValueUpdate$$ = new Subject<string>();
  public searchValueUpdate$ = this.searchValueUpdate$$.asObservable();

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.searchValueUpdate$$
      .pipe(
        filter((value) => value.length >= 2),
        debounceTime(700),
        distinctUntilChanged(),
      )
      .subscribe((val) => {
        console.log(val);
      });
  }

  setSearchResult(value: string): void {
    this.searchValueUpdate$$.next(value);
  }

  onToggleFilter(): void {
    this.isToggleFilter = !this.isToggleFilter;
    this.youtubeService.isToggleFilter = this.isToggleFilter;
  }
}
