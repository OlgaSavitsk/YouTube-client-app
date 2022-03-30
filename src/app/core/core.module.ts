import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoInfoComponent } from './components/video-info/video-info.component';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    VideoInfoComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective
  ],
})
export class CoreModule { }
