import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import MaterialModule from './material/material.module';
import VideoInfoComponent from './components/video-info/video-info.component';

@NgModule({
    declarations: [VideoInfoComponent],
    imports: [
      CommonModule,
      MaterialModule],
    exports: [CommonModule, MaterialModule],
})
export default class SharedModule {}
