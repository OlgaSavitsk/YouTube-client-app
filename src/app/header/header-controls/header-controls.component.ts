import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-controls',
  templateUrl: './header-controls.component.html',
  styleUrls: ['./header-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderControlsComponent {
  @Output() toggleFilter = new EventEmitter()
  @Output() toggleSearchResult = new EventEmitter()

  constructor() {
  }

  onToggleResult(e: Event) {
    e.preventDefault()
    this.toggleSearchResult.emit()
  }

  onToggleFilter() {
    this.toggleFilter.emit()
  }

}
