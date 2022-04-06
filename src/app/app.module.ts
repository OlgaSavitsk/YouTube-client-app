import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import { AuthModule } from './auth/auth.module';
import CoreModule from './core/core.module';
import SharedModule from './shared/shared.module';
import YoutubeModule from './youtube/youtube.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    YoutubeModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
