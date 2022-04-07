import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

import DateService from '@core/services/date.service';
import { SearchItem, SearchItemSnippet } from '@search/models/search-item.model';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchCardComponent implements OnInit {
  @Input() item!: SearchItem;
  itemS!: SearchItemSnippet;
  itemImageUrl: string | undefined;
  itemTitle: string | undefined;

  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    const {
      snippet: {
        thumbnails: {
          medium: { url: urlValue },
        },
      },
    } = this.item;
    this.itemImageUrl = urlValue;
    const {
      snippet: {
        localized: { title: titleValue },
      },
    } = this.item;
    this.itemTitle = titleValue;
  }

  getDateDiff(publishedAt: string): number {
    return this.dateService.getDateDiff(publishedAt);
  }
}
