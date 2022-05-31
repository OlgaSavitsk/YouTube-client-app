import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import HeaderComponent from './components/header/header.component';
import HeaderControlsComponent from './components/header/header-controls/header-controls.component';
import LoginComponent from './components/header/login/login.component';
import FooterComponent from './components/footer/footer.component';
import NotFoundComponent from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    HeaderControlsComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [
    HeaderComponent,
    LoginComponent,
    HeaderControlsComponent,
    FooterComponent,
    NotFoundComponent,
  ],
})
export default class CoreModule {}
