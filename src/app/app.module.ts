import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './header/login/login.component';
import { HeaderControlsComponent } from './header/header-controls/header-controls.component';
import { SearchCardListComponent } from './search/components/search-card-list/search-card-list.component';
import { SearchCardComponent } from './search/components/search-card/search-card.component';
import { FilterComponent } from './search/components/filter/filter.component';

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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
