import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { INTERCEPTOR_PROVIDERS } from '@core/interceptors/providers';
import CoreModule from '@core/core.module';
import AppComponent from './app.component';
import AppRoutingModule from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    INTERCEPTOR_PROVIDERS
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
