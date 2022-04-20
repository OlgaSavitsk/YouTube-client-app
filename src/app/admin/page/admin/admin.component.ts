import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { ValidationService } from '@auth/services/validation.service';
import { IValidationMessage } from '@shared/models/form-error.model';
import { DataErrorMessageService } from '@core/services/data-error-message.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  formGroup!: FormGroup;
  private ngUnsubscribe = new Subject();
  regexUrl = /^http[s]?:\/\/(www\.)?(.*)?\/?(.)*/;
  regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  errorMessages!: IValidationMessage;

  constructor(
    public validationService: ValidationService,
    private setErrorService: DataErrorMessageService,
  ) {}

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
        this.validationService.checkValidation(this.regexUrl, { checkUrl: true }),
      ]),
      videoLink: new FormControl('', [
        Validators.required,
        this.validationService.checkValidation(this.regexUrl, { checkUrl: true }),
      ]),
      date: new FormControl('', [
        Validators.required,
        this.validationService.checkValidation(
          this.regexDate,
          { checkDate: true },
          new Date(),
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

  ngOnDestroy() {
    this.ngUnsubscribe.next('');
    this.ngUnsubscribe.complete();
  }
}
