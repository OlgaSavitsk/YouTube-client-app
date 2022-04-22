import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import SharedModule from '@shared/shared.module';
import FilterComponent from './components/filter/filter.component';
import SearchCardComponent from './components/search-card/search-card.component';
import SearchCardListComponent from './components/search-card-list/search-card-list.component';
import SortButtonsComponent from './components/filter/sort-buttons/sort-buttons.component';
import SortByWordsButtonComponent from './components/filter/sort-by-words-button/sort-by-words-button.component';
import CardDetailsPageComponent from './pages/card-details-page/card-details-page.component';
import FilterPipe from './pipes/filter.pipe';
import SortPipe from './pipes/sort.pipe';
import YoutubeRoutingModule from './youtube-routing.module';
import SearchResultPageComponent from './pages/card-list-page/search-result-page.component';
import DirectivesModule from './directives/directives.module';

@NgModule({
  declarations: [
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
  imports: [CommonModule, SharedModule, YoutubeRoutingModule, DirectivesModule],
  exports: [
    FilterComponent,
    SearchCardListComponent,
    SearchResultPageComponent,
    CardDetailsPageComponent,
  ],
})
export class YoutubeModule {}
