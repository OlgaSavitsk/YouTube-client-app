import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { IUser } from '@auth/models/user.model';
import { defaultParams } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export default class LocalstorageService {
  private usedLocalStorage: Storage | undefined;
  currentUser: IUser | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.usedLocalStorage = this.getWindowRef();
  }

  getWindowRef(): Storage | undefined {
    if (isPlatformBrowser(this.platformId)) {
      return window.localStorage;
    }
    return undefined;
  }

  getStorageItem(storageName: string): string | null {
    if (this.usedLocalStorage) {
      const storageData = this.usedLocalStorage.getItem(storageName);
      return storageData;
    }
    return null;
  }

  loadFromLocalStorage(storageName: string): void {
    const storageData = this.getStorageItem(storageName);
    const checkStorageData = (data: string | null | undefined) => data;
    if (!checkStorageData(storageData)) {
      this.currentUser = defaultParams;
    } else {
      const data: IUser = JSON.parse(storageData!);
      this.currentUser = data;
    }
  }

  getStorageData(): IUser | undefined {
    return this.currentUser;
  }

  setStorageData(data: IUser, storageName: string): void {
    this.currentUser = data;
    this.saveToStorage(storageName);
  }

  saveToStorage(storageName: string): void {
    if (this.usedLocalStorage) {
      this.usedLocalStorage.setItem(storageName, JSON.stringify(this.currentUser));
    }
  }

  removeStorage(storageName: string): void {
    if (this.usedLocalStorage) {
      this.usedLocalStorage.removeItem(storageName);
    }
  }
}
