import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  skip,
  Subject,
} from 'rxjs';

import YoutubeService from '@youtube/services/youtube.service';
import { SearchResultStateService } from '@youtube/services/search-result-state.service';

@Component({
  selector: 'app-header-controls',
  templateUrl: './header-controls.component.html',
  styleUrls: ['./header-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderControlsComponent implements OnInit {
  isToggleFilter: boolean = false;
  isToggleSearchResult: boolean = false;
  searchValue: string = '';
  private searchValueUpdate$$ = new Subject<string>();
  public searchValueUpdate$ = this.searchValueUpdate$$.asObservable();

  constructor(
    private youtubeService: YoutubeService,
    private httpStateService: SearchResultStateService,
  ) {}

  ngOnInit(): void {
    this.searchValueUpdate$$
      .pipe(
        skip(2),
        map((value) => (value.length > 2 ? value : null)),
        debounceTime(700),
        distinctUntilChanged(),
      )
      .subscribe((value) => {
        this.httpStateService.initData(value);
        this.onToggleSearchResult(!!value);
      });
  }

  setSearchResult(value: string): void {
    this.searchValueUpdate$$.next(value);
  }

  onToggleSearchResult(val: boolean): void {
    this.youtubeService.isToggleSearchResult = val;
  }

  onToggleFilter(): void {
    this.isToggleFilter = !this.isToggleFilter;
    this.youtubeService.isToggleFilter = !this.isToggleFilter;
  }
}
