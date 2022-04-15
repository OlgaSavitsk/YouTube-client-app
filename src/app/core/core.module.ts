import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import HeaderComponent from './components/header/header.component';
import HeaderControlsComponent from './components/header/header-controls/header-controls.component';
import LoginComponent from './components/header/login/login.component';
import FooterComponent from './components/footer/footer.component';
import NotFoundComponent from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    HeaderControlsComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HeaderComponent,
    LoginComponent,
    HeaderControlsComponent,
    FooterComponent,
    NotFoundComponent,
  ]
})
export default class CoreModule {}
