import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import AuthService from '@auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthPageComponent implements OnInit {
  formGroup!: FormGroup;
  logged: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

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
}
