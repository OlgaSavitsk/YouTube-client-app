import { Injectable } from '@angular/core';
import { IUser } from '@auth/models/user.model';
import LocalstorageService from '@core/services/localstorage.service';
import { STORAGE_NAME } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  username: IUser | undefined;

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
     this.username = currentUser;
    return currentUser;
  }

  logout() {
    this.storageService.removeStorage(STORAGE_NAME);
  }
}
