import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import MaterialModule from './material/material.module';
import VideoInfoComponent from './components/video-info/video-info.component';

@NgModule({
  declarations: [VideoInfoComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule,],
  exports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export default class SharedModule {}
