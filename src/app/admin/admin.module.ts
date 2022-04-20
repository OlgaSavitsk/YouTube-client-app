import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import SharedModule from '@shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './page/admin/admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule,
  ],
  exports: [AdminComponent],
})
export class AdminModule {}
