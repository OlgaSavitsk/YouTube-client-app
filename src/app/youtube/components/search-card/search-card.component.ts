import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

import { SearchItem } from '@youtube/models/search-item.model';
import DateService from '@youtube/services/date.service';
import { ICustomItem } from 'src/app/admin/models/custom-item.model';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchCardComponent implements OnInit {
  @Input() item!: SearchItem;
  @Input() customItem!: ICustomItem;
  itemImageUrl: string | undefined;
  itemTitle: string | undefined;

  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    if (this.item) {
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
  }

  getDateDiff(publishedAt: string): number {
    return this.dateService.getDateDiff(publishedAt);
  }
}
