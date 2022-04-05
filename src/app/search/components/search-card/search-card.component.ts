import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import DateService from '@core/services/date.service';
import { SearchItem } from '@search/models/search-item.model';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchCardComponent {
  @Input() item?: SearchItem;

  constructor(private dateService: DateService) {}

  getDateDiff(publishedAt: string): number {
    return this.dateService.getDateDiff(publishedAt);
  }
}
