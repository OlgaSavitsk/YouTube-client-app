import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import AuthService from '@auth/services/auth.service';
import LocalstorageService from '@core/services/localstorage.service';
import { ToggleService } from '@core/services/toggle.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthPageComponent implements OnInit {
  formGroup!: FormGroup;
  isLog: boolean = false;

  constructor(
    public authService: AuthService,
    public storageService: LocalstorageService,
    private router: Router,
    public toggleService: ToggleService,
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      return;
    }
    const login: string = this.formGroup.value.login.trim();
    const password: string = this.formGroup.value.password.trim();
    const token: string = 'fake-jwt-token';
    this.authService.login(login, token);
    this.router.navigate(['search']);
  }

  toggleLogOut(): void {
    this.authService.isLoggedIn();
  }
}
