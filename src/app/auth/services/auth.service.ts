import { Injectable } from '@angular/core';
import { IUser } from '@auth/models/user.model';

import LocalstorageService from '@core/services/localstorage.service';
import { defaultParams } from 'src/app/app.constants';

@Injectable()
export default class AuthService {
  constructor(public storageService: LocalstorageService) {
    this.storageService.loadFromLocalStorage('userDate');
  }

  login(login: string, token: string): void {
    this.storageService.setStorageData({
      login,
      token,
      isLogged: true,
    });
    this.storageService.saveToStorage('userDate');
    this.isLoggedIn();
  }

  isLoggedIn(): IUser | undefined {
    const currentUser = this.storageService.getStorageData();
    this.username = currentUser!;
    return currentUser;
  }

  set username({ login, isLogged }: IUser) {
    defaultParams.login = login;
    defaultParams.isLogged = isLogged;
  }

  get username(): IUser {
    return defaultParams;
  }

  logout() {
    this.storageService.removeStorage('userDate');
  }
}
