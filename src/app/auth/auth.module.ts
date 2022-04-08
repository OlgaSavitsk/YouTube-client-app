import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import AuthPageComponent from './pages/auth/auth-page.component';
import SharedModule from '@shared/shared.module';
import AuthService from './services/auth.service';
import LocalstorageService from './services/localstorage.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  exports: [AuthPageComponent],
  providers: [AuthService, LocalstorageService]
})
export class AuthModule { }
