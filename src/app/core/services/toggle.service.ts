import { Injectable } from '@angular/core';

type ToggleOptions = {
  search: boolean;
  filter: boolean
};

export const toggleOptions: ToggleOptions = {
  search: false,
  filter: false
};

@Injectable()
export class ToggleService {
  isToggleResult!: boolean;

  constructor() {}

  set searchResult(val: boolean) {
    toggleOptions.search = val;
  }

  get searchResult(): boolean {
    return toggleOptions.search;
  }

  set filter(val: boolean) {
    toggleOptions.filter = val;
  }

  get filter(): boolean {
    return toggleOptions.filter;
  }
}
