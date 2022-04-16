import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

interface IObjectKeys {
  [key: string]: string;
}

interface IPassword extends IObjectKeys {
  required: string;
  minlength: string;
  hasNumber: string;
  hasCapitalCase: string;
  hasSmallCase: string;
  hasSpecialCharacters: string;
}

interface IEmail extends IObjectKeys {
  required: string;
  email: string;
}

interface IValidationMessage {
  login: IEmail;
  password: IPassword;
}

interface IFormError extends IObjectKeys {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  formErrors: IFormError = {
    login: '',
    password: '',
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
  };

  constructor() {}

  setValidationErrors(group: FormGroup) {
    Object.keys(group.controls).forEach((key) => {
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
          const messages = this.validationMessage[key as keyof IValidationMessage];
          for (const error in abstractControl?.errors) {
            this.formErrors[key] += ` ${messages[error]},`;
          }
        }
      }
    });
  }

  patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }
}
