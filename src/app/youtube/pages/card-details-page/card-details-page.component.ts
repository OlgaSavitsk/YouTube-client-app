import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchItem } from '@youtube/models/search-item.model';
import DateService from '@youtube/services/date.service';
import { SEARCH_ITEM } from 'src/app/app.constants';

@Component({
  selector: 'app-card-details-page',
  templateUrl: './card-details-page.component.html',
  styleUrls: ['./card-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardDetailsPageComponent implements OnInit {
  item: SearchItem | undefined;
  searchItems = SEARCH_ITEM.items;

  constructor(private dateService: DateService, private route: ActivatedRoute) {}

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.item = this.onSelectCard(id);
  }

  getDateDiff(publishedAt: string): number {
    return this.dateService.getDateDiff(publishedAt);
  }

  onSelectCard(id: string) {
    return this.searchItems.find((item) => id === item.id);
  }
}
