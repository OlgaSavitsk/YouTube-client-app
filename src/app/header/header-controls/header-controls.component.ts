import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-controls',
  templateUrl: './header-controls.component.html',
  styleUrls: ['./header-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export default class HeaderControlsComponent {
  @Output() toggleFilter = new EventEmitter<boolean>()
  @Output() toggleSearchResult = new EventEmitter<boolean>()

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
