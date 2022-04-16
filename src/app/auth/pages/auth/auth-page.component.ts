import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import AuthService from '@auth/services/auth.service';
import { ValidationService } from '@auth/services/validation.service';
import { defaultParams, Paths } from 'src/app/app.constants';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthPageComponent implements OnInit {
  formGroup!: FormGroup;

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
        this.validationService.patternValidator(/\d/, { hasNumber: true }),
        this.validationService.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        this.validationService.patternValidator(/[a-z]/, { hasSmallCase: true }),
        this.validationService.patternValidator(/[!@#$%^&*()_+-=[{};':"|,.<>\]]/, {
          hasSpecialCharacters: true,
        }),
      ]),
    });
    this.formGroup.valueChanges.subscribe((data) => {
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
    this.router.navigate([Paths.toSearchPage]);
  }
}
