import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import AuthService from '@auth/services/auth.service';
import { ValidationService } from '@auth/services/validation.service';
import { defaultParams, Path } from 'src/app/app.constants';
import { DataErrorMessageService } from '@core/services/data-error-message.service';
import { IValidationMessage } from '@shared/models/form-error.model';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthPageComponent implements OnInit, OnDestroy {
  formGroup!: FormGroup;
  private ngUnsubscribe = new Subject();
  errorMessages!: IValidationMessage;

  constructor(
    private authService: AuthService,
    private router: Router,
    public validationService: ValidationService,
    private setErrorService: DataErrorMessageService,
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
    this.setErrorService
      .getErrorData()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data: IValidationMessage[]) => {
        [this.errorMessages] = data;
        return this.errorMessages;
      });
    this.formGroup.valueChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.validationService.setValidationErrors(this.formGroup, this.errorMessages);
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
    this.ngUnsubscribe.next('');
    this.ngUnsubscribe.complete();
  }
}
