import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import HeaderComponent from './components/header/header.component';
import HeaderControlsComponent from './components/header/header-controls/header-controls.component';
import LoginComponent from './components/header/login/login.component';
import FooterComponent from './components/footer/footer.component';
import NotFoundComponent from './pages/not-found/not-found.component';
import { ToggleService } from './services/toggle.service';
import LocalstorageService from './services/localstorage.service';
import AuthService from '@auth/services/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    HeaderControlsComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    LoginComponent,
    HeaderControlsComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  providers: [ToggleService],
})
export default class CoreModule {}
