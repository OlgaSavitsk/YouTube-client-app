import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header-controls',
  templateUrl: './header-controls.component.html',
  styleUrls: ['./header-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HeaderControlsComponent {

  constructor() { }

}
