import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import CardDetailsPageComponent from './pages/card-details-page/card-details-page.component';
import { SearchResultPageComponent } from './pages/card-list-page/search-result-page.component';

const routes: Routes = [
  { path: '', component: SearchResultPageComponent },
  { path: ':id', component: CardDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
