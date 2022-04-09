import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import LocalstorageService from '@core/services/localstorage.service';
import { Observable } from 'rxjs';

import { STORAGE_NAME } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router, private storageService: LocalstorageService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.handle();
  }

  handle() {
    if (this.storageService.getStorageItem(STORAGE_NAME)) {
      this.router.navigate(['login']);
      return true;
    }
    return false;
  }
}
