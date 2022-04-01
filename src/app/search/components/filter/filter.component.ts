import {
    Component,
    ChangeDetectionStrategy,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class FilterComponent {
    @Input() toggleFilter?: boolean;
    @Output() clickSortDate = new EventEmitter();
    @Output() clickSortViews = new EventEmitter();
    @Output() changeSearchInputValue = new EventEmitter();

    constructor() {}
}
