import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoInfoComponent } from './components/video-info/video-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';



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
})
export class CoreModule { }
