import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { SearchResultStateService } from '@youtube/services/search-result-state.service';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-search-card-list',
  templateUrl: './search-card-list.component.html',
  styleUrls: ['./search-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchCardListComponent {
  @Input() items: SearchItem[] = [];
  @Input() isDeskDate: boolean | undefined;
  @Input() isDeskView: boolean | undefined;
  @Input() sortParam: string | undefined;
  @Input() filterWord!: string;

  constructor(public httpStateServive: SearchResultStateService) {}
}
