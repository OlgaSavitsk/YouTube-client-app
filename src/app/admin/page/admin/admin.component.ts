import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ValidationService } from '@auth/services/validation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  formGroup!: FormGroup;
  regexUrl = /^http[s]?:\/\/(www\.)?(.*)?\/?(.)*/;
  regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

  constructor(public validationService: ValidationService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl('', [Validators.maxLength(255)]),
      img: new FormControl('', [
        Validators.required,
        this.validationService.patternValidator(this.regexUrl, { checkUrl: true }),
      ]),
      videoLink: new FormControl('', [
        Validators.required,
        this.validationService.patternValidator(this.regexUrl, { checkUrl: true }),
      ]),
      date: new FormControl('', [
        Validators.required,
        this.validationService.patternValidator(
          this.regexDate,
          { checkDate: true },
          new Date(),
        ),
      ]),
    });
    this.formGroup.valueChanges.subscribe(() => {
      this.validationService.setValidationErrors(this.formGroup);
    });
  }
}
