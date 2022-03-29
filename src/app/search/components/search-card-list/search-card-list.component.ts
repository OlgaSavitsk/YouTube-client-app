import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';

@Component({
    selector: 'app-search-card-list',
    templateUrl: './search-card-list.component.html',
    styleUrls: ['./search-card-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchCardListComponent {
    @Input() items: SearchItem[] = [];
    @Input() toggleResult: boolean = false;

    constructor() {}
}
