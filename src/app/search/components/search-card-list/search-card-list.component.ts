import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { SearchItem } from '@search/models/search-item.model';

@Component({
  selector: 'app-search-card-list',
  templateUrl: './search-card-list.component.html',
  styleUrls: ['./search-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchCardListComponent {
  @Input() items: SearchItem[] = [];
  @Input() toggleResult: boolean = false;
  @Input() isDeskDate: boolean | undefined;
  @Input() isDeskView: boolean | undefined;
  @Input() sortParam: string | undefined;
  @Input() searchWord!: string;

  constructor() {}
}
