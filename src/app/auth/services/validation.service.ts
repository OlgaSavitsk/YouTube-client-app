import { Injectable, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Subscription } from 'rxjs';

import { IFormError, IValidationMessage } from '@shared/models/form-error.model';
import DateService from '@youtube/services/date.service';
import { DataErrorMessageService } from '@core/services/data-error-message.service';

@Injectable({
  providedIn: 'root',
})
export class ValidationService implements OnDestroy {
  formErrors: IFormError = {
    login: '',
    password: '',
    title: '',
    description: '',
    img: '',
    videoLink: '',
    date: '',
  };

  errorData!: IValidationMessage;
  subscription: Subscription;

  constructor(
    private dateService: DateService,
    private setErrorService: DataErrorMessageService,
  ) {
    this.subscription = this.setErrorService.loadDataErrorMessage().subscribe((data) => {
      [this.errorData] = data;
      return this.errorData;
    });
  }

  setValidationErrors(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.setValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (
          abstractControl &&
          !abstractControl.valid &&
          (abstractControl.touched || abstractControl.dirty)
        ) {
          const messages = this.errorData[key];
          Object.keys(abstractControl.errors!).forEach((error: string) => {
            this.formErrors[key] = this.formErrors[key].concat(messages[error]);
          });
        }
      }
    });
  }

  checkValidation(regex: RegExp, error: ValidationErrors, date?: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: ValidationErrors } | null => {
      if (!control.value) {
        return null;
      }
      let valid = regex.test(control.value);
      if (date) {
        valid = this.dateService.getDateDiff(control.value) > 0;
      }
      return valid ? null : error;
    };
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
