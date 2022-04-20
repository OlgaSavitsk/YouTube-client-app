import { IUser } from '@auth/models/user.model';

export const enum DateParam {
  SECONDS_IN_DAY = 24 * 60 * 60,
  MS = SECONDS_IN_DAY * 1000,
  NUMBER_DAYS_WEEK = 7,
  NUMBER_DAYS_MONTH = 30,
  SIX_MONTHS = 6,
}

export enum BorderColor {
  blue = 'blue',
  green = 'green',
  red = 'red',
  yellow = 'yellow',
}

export enum SortParam {
  dateParam = 'date',
  viewParam = 'view',
}

export const defaultUserName = "Your name"

export const defaultParams: IUser = {
  login: defaultUserName,
  token: 'fake-jwt-token',
  isLogged: false,
};

export const STORAGE_NAME = 'userDate';
export const enum Paths {
  toLoginPage = 'login',
  toSearchPage = 'search'
}
