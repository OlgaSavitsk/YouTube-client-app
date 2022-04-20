import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import SharedModule from '@shared/shared.module';
import AuthPageComponent from './pages/auth/auth-page.component';
import AuthRoutingModule from './auth-routing.module';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    AuthRoutingModule,
  ],
  exports: [AuthPageComponent],
  providers: [],
})
export class AuthModule {}
