import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';

import { ValidationService } from '@auth/services/validation.service';
import { IValidationMessage } from '@shared/models/form-error.model';
import DateService from '@youtube/services/date.service';
import { addCustomItem } from 'src/app/redux/actions/custom.actions';
import { customSelector } from 'src/app/redux/selectors/collection.selector';
import DataJson from 'src/assets/data-error-message.json';
import { ICustomItem } from '../../models/custom-item.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminComponent implements OnInit, OnDestroy {
  formGroup!: FormGroup;
  private ngUnsubscribe = new Subject();
  regexUrl = /^http[s]?:\/\/(www\.)?(.*)?\/?(.)*/;
  regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  errorMessages!: IValidationMessage;

  customItems$ = this.store.select(customSelector);
  item!: ICustomItem;

  constructor(
    public validationService: ValidationService,
    private store: Store,
    private dateService: DateService,
  ) {
    [this.errorMessages] = DataJson;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl('', [Validators.maxLength(255)]),
      img: new FormControl('', [
        /* Validators.required, */
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
    this.formGroup.valueChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.validationService.setValidationErrors(this.formGroup, this.errorMessages);
    });
  }

  createCard(): void {
    this.store.dispatch(
      addCustomItem({
        item: {
          title: this.formGroup.value.title,
          description: this.formGroup.value.description,
          img: this.formGroup.value.img,
          linkVideo: this.formGroup.value.videoLink,
          date: this.formGroup.value.date,
          id: Date.now().toString(),
        },
      }),
    );
  }

  getDateDiff(publishedAt: string): number {
    return this.dateService.getDateDiff(publishedAt);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next('');
    this.ngUnsubscribe.complete();
  }
}
