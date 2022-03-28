import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './header/login/login.component';
import { HeaderControlsComponent } from './header/header-controls/header-controls.component';
import { SearchCardListComponent } from './search/components/search-card-list/search-card-list.component';
import { SearchCardComponent } from './search/components/search-card/search-card.component';
import { FilterComponent } from './search/components/filter/filter.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderControlsComponent,
    SearchCardListComponent,
    SearchCardComponent,
    FilterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
