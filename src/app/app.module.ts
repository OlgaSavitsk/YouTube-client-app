import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import HeaderControlsComponent from './header/header-controls/header-controls.component';
import LoginComponent from './header/login/login.component';
import FilterComponent from './search/components/filter/filter.component';
import SearchCardListComponent from './search/components/search-card-list/search-card-list.component';
import SearchCardComponent from './search/components/search-card/search-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderControlsComponent,
    SearchCardListComponent,
    SearchCardComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export default class AppModule { }
