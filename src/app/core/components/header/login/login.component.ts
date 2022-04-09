import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import AuthService from '@auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent implements OnInit {
  @Input() username: string | undefined;
  @Input() isLogged: boolean | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.username = this.authService.isLoggedIn()?.login;
  }

  logOut(): void {
    this.router.navigate(['login']);
    this.authService.logout();
    this.username = 'Your name';
    this.isLogged = false;
  }
}
