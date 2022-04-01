import { Component } from '@angular/core';
import { SEARCH_ITEM } from './app.constants';
import { IDesk, sortDesk } from './core/pipes/sort.pipe';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export default class AppComponent {
    isToggleFilter!: boolean;
    isToggleResult!: boolean;
    searchItems = SEARCH_ITEM.items;
    sortDesk: IDesk = sortDesk;
    searchInputValue: string = '';

    onToggleFilter(): void {
        this.isToggleFilter = !this.isToggleFilter;
    }

    onToggleSearchResult(): void {
        this.isToggleResult = !this.isToggleResult;
    }

    public sortByDate(): void {
        sortDesk.date = !sortDesk.date;
        sortDesk.sort = 'date';
    }

    public sortByViews(): void {
        sortDesk.view = !sortDesk.view;
        sortDesk.sort = 'view';
    }

    sorBytWord(str: string): void {
        this.searchInputValue = str;
    }
}
