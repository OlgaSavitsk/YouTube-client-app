import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { SearchItem } from '@youtube/models/search-item.model';
import DateService from '@youtube/services/date.service';
import { SearchResultStateService } from '@youtube/services/search-result-state.service';

@Component({
  selector: 'app-card-details-page',
  templateUrl: './card-details-page.component.html',
  styleUrls: ['./card-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardDetailsPageComponent implements OnInit, OnDestroy {
  item: SearchItem | undefined;
  subscription: Subscription | undefined;
  itemImageUrl!: string;
  itemTitle!: string;

  constructor(
    private dateService: DateService,
    private route: ActivatedRoute,
    public searchStateService: SearchResultStateService,
  ) {}

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.searchStateService.getSearchItem(id);
    this.subscription = this.searchStateService.item$.subscribe(
      (item: SearchItem | null) => {
        this.item = item!;
      },
    );
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
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
