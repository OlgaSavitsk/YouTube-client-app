import { Component, DoCheck } from '@angular/core';

import AuthService from '@auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements DoCheck {
  username: string | undefined;
  isLogged: boolean | undefined;

  constructor(private authService: AuthService) {}

  ngDoCheck(): void {
    this.username = this.authService.username.login;
    this.isLogged = this.authService.username.isLogged;
  }
}
