import { NgModule } from '@angular/core';

import HighlightButtonDirective from './highlight-button.directive';
import HighlightDirective from './highlight.directive';

@NgModule({
  imports: [],
  declarations: [HighlightDirective, HighlightButtonDirective],
  exports: [HighlightDirective, HighlightButtonDirective],
})
export default class DirectivesModule {}
