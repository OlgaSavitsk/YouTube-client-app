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
    login: 'Please enter a login email',
    password: 'Please enter a password',
    title: 'Please enter a title',
    description: '',
    img: 'Please enter a link to the image',
    videoLink: 'Please enter a link to the video',
    date: 'Please enter a creation date',
  };

  validationMessage: IValidationMessage = {
    login: {
      required: this.formErrors.login,
      email: 'The login email is invalid',
    },
    password: {
      required: this.formErrors.password,
      minlength: 'at least 8 characters',
      hasNumber: 'a mixture of letters and numbers',
      hasCapitalCase: 'a mixture of both uppercase and lowercase letters',
      hasSmallCase: 'a mixture of both uppercase and lowercase letters',
      hasSpecialCharacters:
        'inclusion of at least one special character, e.g., ! @ # ? ]',
    },
    title: {
      required: this.formErrors.title,
      minlength: 'The title is too short',
      maxlength: 'The title is too long',
    },
    description: {
      maxlength: 'The description is too long',
    },
    img: {
      required: this.formErrors.img,
      checkUrl: 'The image link is invalid',
    },
    videoLink: {
      required: this.formErrors.videoLink,
      checkUrl: 'he video link is invalid',
    },
    date: {
      required: this.formErrors.date,
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
          Object.keys(abstractControl.errors!).forEach((error: string) => {
            this.formErrors[key] = this.formErrors[key].concat(messages[error]);
          });
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
