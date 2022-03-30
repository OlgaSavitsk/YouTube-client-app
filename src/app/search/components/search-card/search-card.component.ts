import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCardComponent {
  @Input() item?: SearchItem

  constructor() { }

  getDateDiff(publishedAt: string): number {
    const today = new Date().getTime();
    const dateFrom = new Date(publishedAt).getTime();
    const diffDay = today - dateFrom;
    return diffDay;
  }

}
