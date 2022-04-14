import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

import AuthService from '@auth/services/auth.service';
import { defaultUserName, Paths } from 'src/app/app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  @Input() username: string | undefined;
  @Input() isLogged: boolean | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  logOut(): void {
    this.router.navigate([Paths.toLoginPage]);
    this.authService.logout();
    this.username = defaultUserName;
    this.isLogged = false;
  }
}
