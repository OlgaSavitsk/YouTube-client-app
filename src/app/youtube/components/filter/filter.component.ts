import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FilterComponent {
  @Input() toggleFilter?: boolean;

  constructor() {}
}
