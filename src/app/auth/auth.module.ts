import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import SharedModule from '@shared/shared.module';
import AuthPageComponent from './pages/auth/auth-page.component';
import AuthRoutingModule from './auth-routing.module';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, SharedModule, HttpClientModule, AuthRoutingModule],
  exports: [AuthPageComponent],
  providers: [],
})
export class AuthModule {}
