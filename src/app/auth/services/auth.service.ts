import { Injectable } from '@angular/core';

import { IUser } from '@auth/models/user.model';
import LocalstorageService from '@core/services/localstorage.service';
import { BehaviorSubject } from 'rxjs';
import { STORAGE_NAME } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  private username: IUser | undefined;
  private isLogged$$ = new BehaviorSubject<boolean>(false);
  public isLogged$ = this.isLogged$$.pipe();

  constructor(public storageService: LocalstorageService) {
    this.storageService.loadFromLocalStorage(STORAGE_NAME);
  }

  login(login: string, token: string): void {
    this.storageService.setStorageData(
      {
        login,
        token,
        isLogged: true,
      },
      STORAGE_NAME,
    );
  }

  userAuthCheck(): IUser | undefined {
    const currentUser = this.storageService.getStorageData();
    this.username = { ...currentUser! };
    this.isLogged$$.next(this.username.isLogged);
    return this.username;
  }

  logout() {
    this.storageService.removeStorage(STORAGE_NAME);
    this.storageService.loadFromLocalStorage(STORAGE_NAME);
  }
}
