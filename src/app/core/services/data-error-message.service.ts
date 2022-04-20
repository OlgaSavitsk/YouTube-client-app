import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IValidationMessage } from '@shared/models/form-error.model';


@Injectable({
  providedIn: 'root',
})
export class DataErrorMessageService {

  constructor(private http: HttpClient) {}

  loadDataErrorMessage(): Observable<IValidationMessage[]> {
    return this.http.get<IValidationMessage[]>('assets/data-error-message.json')
  }
}
