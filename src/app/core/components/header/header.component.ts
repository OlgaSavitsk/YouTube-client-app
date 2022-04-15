import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
} from '@angular/core';

import AuthService from '@auth/services/auth.service';
import { defaultUserName } from 'src/app/app.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent implements DoCheck {
  username: string | undefined = defaultUserName;

  constructor(
    private authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngDoCheck(): void {
    if (this.authService.userAuthCheck()) {
      this.changeDetectorRef.markForCheck();
      const { login } = this.authService.userAuthCheck()!;
      this.username = login;
    }
  }
}
