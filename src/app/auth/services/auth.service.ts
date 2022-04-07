import { Injectable } from '@angular/core';

import { IUser } from '../models/user.model';

@Injectable()
export default class AuthService {

  constructor() { }

  public saveUser(user: IUser) {
    localStorage.setItem('userDate', JSON.stringify(user));
  }

  public isLoggedIn() {
    const savedUser: string | null = localStorage.getItem('userDate');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (err) {
        console.log(err);
      }
    }
    return savedUser;
  }

  public logoutUser() {
    localStorage.removeItem('userDate');
  }
}
