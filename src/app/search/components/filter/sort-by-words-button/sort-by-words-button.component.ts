import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sort-by-words-button',
    templateUrl: './sort-by-words-button.component.html',
    styleUrls: ['./sort-by-words-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortByWordsButtonComponent {
    @Output() changeSearchInputValue = new EventEmitter();
    searchInputValue: string = '';
    constructor() {}
}
