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

  validationMessage: IValidationMessage = {
    login: {
      required: 'Please enter a login email',
      email: 'The login email is invalid',
    },
    password: {
      required: 'Please enter a password',
      minlength: 'at least 8 characters',
      hasNumber: 'a mixture of letters and numbers',
      hasCapitalCase: 'a mixture of both uppercase and lowercase letters',
      hasSmallCase: 'a mixture of both uppercase and lowercase letters',
      hasSpecialCharacters:
        'inclusion of at least one special character, e.g., ! @ # ? ]',
    },
    title: {
      required: 'Please enter a title',
      minlength: 'The title is too short',
      maxlength: 'The title is too long',
    },
    description: {
      maxlength: 'The description is too long',
    },
    img: {
      required: 'Please enter a link to the image',
      checkUrl: 'The image link is invalid',
    },
    videoLink: {
      required: 'Please enter a link to the video',
      checkUrl: 'he video link is invalid',
    },
    date: {
      required: 'Please enter a creation date',
      checkDate: 'The date is invalid',
    },
  };

  constructor(private dateService: DateService) {}

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
          const messages = this.validationMessage[key];
          for (const error in abstractControl?.errors) {
            this.formErrors[key] += ` ${messages[error]}`;
          }
        }
      }
    });
  }

  patternValidator(regex: RegExp, error: ValidationErrors, date?: Date): ValidatorFn {
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
