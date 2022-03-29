import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @Output() toggleFilter = new EventEmitter();
    @Output() toggleSearchResult = new EventEmitter();

    constructor() {}

    onToggleFilter(): void {
        this.toggleFilter.emit();
    }

    onToggleSearchResult(): void {
        this.toggleSearchResult.emit();
    }
}
