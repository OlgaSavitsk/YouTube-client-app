import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import AuthService from '@auth/services/auth.service';
import { ValidationService } from '@auth/services/validation.service';
import { defaultParams, Path } from 'src/app/app.constants';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthPageComponent implements OnInit, OnDestroy {
  formGroup!: FormGroup;
  subscription: Subscription | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    public validationService: ValidationService,
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        this.validationService.checkValidation(/[0-9]/, { hasNumber: true }),
        this.validationService.checkValidation(/[A-Z]/, { hasCapitalCase: true }),
        this.validationService.checkValidation(/[a-z]/, { hasSmallCase: true }),
        /* eslint-disable no-useless-escape */
        this.validationService.checkValidation(
          /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
          {
            hasSpecialCharacters: true,
          },
        ),
      ]),
    });
    this.subscription = this.formGroup.valueChanges.subscribe(() => {
      this.validationService.setValidationErrors(this.formGroup);
    });
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      return;
    }
    const login: string = this.formGroup.value.login.trim();
    const { token } = defaultParams;
    this.authService.login(login, token!);
    this.router.navigate([Path.adminPage]);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
