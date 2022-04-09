import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import AppComponent from './app.component';
import CoreModule from './core/core.module';
import AppRoutingModule from './app-routing.module';
import AuthService from '@auth/services/auth.service';
import LocalstorageService from '@core/services/localstorage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [AuthService, LocalstorageService],
  bootstrap: [AppComponent],
})
export default class AppModule {}
