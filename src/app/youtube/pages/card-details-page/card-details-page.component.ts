import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchItem } from '@youtube/models/search-item.model';
import DateService from '@youtube/services/date.service';
import YoutubeService from '@youtube/services/youtube.service';

@Component({
  selector: 'app-card-details-page',
  templateUrl: './card-details-page.component.html',
  styleUrls: ['./card-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardDetailsPageComponent implements OnInit {
  item: SearchItem | undefined;

  constructor(
    private dateService: DateService,
    private route: ActivatedRoute,
    private youtubeService: YoutubeService,
  ) {}

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.item = this.youtubeService.onSelectCard(id);
  }

  getDateDiff(publishedAt: string): number {
    return this.dateService.getDateDiff(publishedAt);
  }
}
