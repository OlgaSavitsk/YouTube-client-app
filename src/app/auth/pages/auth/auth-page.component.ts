import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthPageComponent implements OnInit {
  formGroup!: FormGroup;
  logged = false;

  constructor() {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    const login: string = this.formGroup.value.login.trim();
    const password: string = this.formGroup.value.password.trim();
    // this.authService.saveUser({ login, password });
    // this.router.navigate(['search']);
    console.log(this.formGroup.value)
  }

  toggleLogOut(): void {
    this.logged = !this.logged;
  }
}
