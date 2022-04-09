import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import SharedModule from '@shared/shared.module';
import FilterComponent from './components/filter/filter.component';
import SearchCardComponent from './components/search-card/search-card.component';
import SearchCardListComponent from './components/search-card-list/search-card-list.component';
import SortButtonsComponent from './components/filter/sort-buttons/sort-buttons.component';
import SortByWordsButtonComponent from './components/filter/sort-by-words-button/sort-by-words-button.component';
import HighlightDirective from './directives/highlight.directive';
import CardDetailsPageComponent from './pages/card-details-page/card-details-page.component';
import FilterPipe from './pipes/filter.pipe';
import SortPipe from './pipes/sort.pipe';
import DateService from './services/date.service';
import YoutubeRoutingModule from './youtube-routing.module';
import SearchResultPageComponent from './pages/card-list-page/search-result-page.component';
import YoutubeService from './services/youtube.service';

@NgModule({
  declarations: [
    HighlightDirective,
    SortPipe,
    FilterPipe,
    SearchCardListComponent,
    SearchCardComponent,
    FilterComponent,
    SortButtonsComponent,
    SortByWordsButtonComponent,
    CardDetailsPageComponent,
    SearchResultPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    YoutubeRoutingModule,
  ],
  exports: [
    FilterComponent,
    SearchCardListComponent,
    SearchResultPageComponent,
    CardDetailsPageComponent,
  ],
  providers: [DateService, YoutubeService],
})
export class YoutubeModule {}
