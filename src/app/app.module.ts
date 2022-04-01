import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './header/login/login.component';
import { HeaderControlsComponent } from './header/header-controls/header-controls.component';
import { SearchCardListComponent } from './search/components/search-card-list/search-card-list.component';
import { SearchCardComponent } from './search/components/search-card/search-card.component';
import { FilterComponent } from './search/components/filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { SortButtonsComponent } from './search/components/filter/sort-buttons/sort-buttons.component';
import { SortByWordsButtonComponent } from './search/components/filter/sort-by-words-button/sort-by-words-button.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderControlsComponent,
        SearchCardListComponent,
        SearchCardComponent,
        FilterComponent,
        HeaderComponent,
        SortButtonsComponent,
        SortByWordsButtonComponent,
    ],
    imports: [BrowserModule, CoreModule, SharedModule, FormsModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
