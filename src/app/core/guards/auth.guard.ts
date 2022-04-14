import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import LocalstorageService from '@core/services/localstorage.service';
import { Observable } from 'rxjs';

import { Paths, STORAGE_NAME } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export default class AuthGuard implements CanLoad {
  constructor(private router: Router, private storageService: LocalstorageService) {}

  canLoad():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.handle();
  }

  handle() {
    if (this.storageService.getStorageItem(STORAGE_NAME)) {
      return true;
    }
    this.router.navigate([`/${Paths.toLoginPage}`]);
    return false;
  }
}
