import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import VideoInfoComponent from './components/video-info/video-info.component';
import FilterPipe from './pipes/filter.pipe';
import HighlightDirective from './directives/highlight.directive';
import SortPipe from './pipes/sort.pipe';
import DateService from './services/date.service';



@NgModule({
  declarations: [
    VideoInfoComponent,
    HighlightDirective,
    SortPipe,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    SortPipe,
    FilterPipe
  ],
  providers: [DateService]
})
export default class CoreModule { }
