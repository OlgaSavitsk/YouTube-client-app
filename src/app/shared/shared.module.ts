import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import MaterialModule from './material/material.module';
import VideoInfoComponent from './components/video-info/video-info.component';

@NgModule({
  declarations: [VideoInfoComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
})
export default class SharedModule {}
