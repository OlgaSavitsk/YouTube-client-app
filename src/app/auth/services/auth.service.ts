import { Injectable } from '@angular/core';

import { IUser } from '../models/user.model';
import LocalstorageService from './localstorage.service';

@Injectable()
export default class AuthService {
  constructor(private storageService: LocalstorageService) {
    this.storageService.loadFromLocalStorage('userDate');
  }

  login(login: string, token: string) {
    this.storageService.setStorageData({
      login,
      token,
    });
    this.storageService.saveToStorage('userDate');
  }

  isLoggedIn() {
    const currentUser: string | null = this.storageService.getStorageData();
    return currentUser;
  }

  logout() {
    this.storageService.removeStorage('userDate');
  }
}
