import { Component } from '@angular/core';
import { SEARCH_ITEM } from './app.constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'youtube-client';
    isToggleFilter!: boolean;
    isToggleResult!: boolean;
    searchItems = SEARCH_ITEM.items;

    onToggleFilter(): void {
        this.isToggleFilter = !this.isToggleFilter;
    }

    onToggleSearchResult(): void {
        this.isToggleResult = !this.isToggleResult;
    }
}
