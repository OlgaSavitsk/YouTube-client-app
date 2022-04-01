import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { IDesk,  sortDesk} from 'app/core/pipes/sort.pipe';

@Component({
    selector: 'app-sort-buttons',
    templateUrl: './sort-buttons.component.html',
    styleUrls: ['./sort-buttons.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortButtonsComponent {
    @Output() clickSortDate = new EventEmitter();
    @Output() clickSortViews = new EventEmitter();
    sortDesk: IDesk = sortDesk;
    constructor() {}
}
