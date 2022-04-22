import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { SearchItem } from '@youtube/models/search-item.model';
import { customSelector } from 'src/app/redux/selectors/collection.selector';

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

  customItems$ = this.store.select(customSelector);

  constructor(private store: Store) {}
}
