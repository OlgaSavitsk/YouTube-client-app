import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

import { IFormError, IValidationMessage } from '@shared/models/form-error.model';
import DateService from '@youtube/services/date.service';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  formErrors: IFormError = {
    login: '',
    password: '',
    title: '',
    description: '',
    img: '',
    videoLink: '',
    date: '',
  };

  constructor(private dateService: DateService) {}

  setValidationErrors(group: FormGroup, messages: IValidationMessage): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.setValidationErrors(abstractControl, messages);
      } else {
        this.formErrors[key] = '';
        if (
          abstractControl &&
          !abstractControl.valid &&
          (abstractControl.touched || abstractControl.dirty)
        ) {
          const errorMessage = messages[key];
          Object.keys(abstractControl.errors!).forEach((error: string) => {
            this.formErrors[key] = this.formErrors[key].concat(errorMessage[error]);
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
}
