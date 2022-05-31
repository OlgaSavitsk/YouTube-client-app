import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, take, tap } from 'rxjs';

import { IValidationMessage } from '@shared/models/form-error.model';

@Injectable({
  providedIn: 'root',
})
export class DataErrorMessageService {
  errorData!: IValidationMessage[];
  private errorData$$ = new Subject();
  public errorData$ = this.errorData$$.pipe();

  constructor(private http: HttpClient) {
    this.errorData$ = this.http
      .get<IValidationMessage[]>('assets/data-error-message.json')
      .pipe(
        take(1),
        tap((data: IValidationMessage[]) => this.errorData$$.next(data)),
      );
  }

  getErrorData(): any {
    return this.errorData ? this.errorData$ : this.errorData$;
  }
}
