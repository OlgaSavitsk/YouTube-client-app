import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { SearchItem } from '@youtube/models/search-item.model';
import DateService from '@youtube/services/date.service';
import { SearchResultStateService } from '@youtube/services/search-result-state.service';
import { customSelector } from 'src/app/redux/selectors/collection.selector';
import { ICustomItem } from '@admin/models/custom-item.model';

@Component({
  selector: 'app-card-details-page',
  templateUrl: './card-details-page.component.html',
  styleUrls: ['./card-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardDetailsPageComponent implements OnInit, OnDestroy {
  item: SearchItem | undefined;
  subscription = new Subscription();
  itemImageUrl!: string;
  itemTitle!: string;
  customCard!: ICustomItem;

  constructor(
    private dateService: DateService,
    private route: ActivatedRoute,
    public searchStateService: SearchResultStateService,
    private store: Store,
  ) {}

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.searchStateService.getSearchItem(id);
    const subscriptionCustomItem: Subscription = this.store
      .select(customSelector)
      .subscribe((cards) =>
        cards.map((card) => {
          this.customCard = card;
          return this.customCard;
        }),
      );
    const subscriptionSearchItem: Subscription = this.searchStateService.item$.subscribe(
      (item: SearchItem | null) => {
        this.item = item!;
      },
    );
    this.destructureItem();
    this.subscription.add(subscriptionCustomItem);
    this.subscription.add(subscriptionSearchItem);
  }

  destructureItem() {
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
