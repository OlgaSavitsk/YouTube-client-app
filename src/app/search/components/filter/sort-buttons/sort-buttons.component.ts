import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-sort-buttons',
    templateUrl: './sort-buttons.component.html',
    styleUrls: ['./sort-buttons.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortButtonsComponent {
    constructor() {}
}
