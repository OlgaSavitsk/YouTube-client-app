import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-card-list',
  templateUrl: './search-card-list.component.html',
  styleUrls: ['./search-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCardListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
