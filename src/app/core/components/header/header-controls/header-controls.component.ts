import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ToggleService } from '@core/services/toggle.service';

@Component({
  selector: 'app-header-controls',
  templateUrl: './header-controls.component.html',
  styleUrls: ['./header-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderControlsComponent {
  isToggleFilter: boolean = false;
  isToggleResult: boolean = false;

  constructor(public toggleService: ToggleService) {}

  onToggleResult(e: Event) {
    e.preventDefault();
    this.isToggleResult = !this.isToggleResult;
    this.toggleService.toggleSearchResult = this.isToggleResult;
  }

  onToggleFilter() {
    this.isToggleFilter = !this.isToggleFilter;
    this.toggleService.toggleFilter = this.isToggleFilter;
  }
}
