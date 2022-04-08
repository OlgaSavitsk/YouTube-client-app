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

  set toggleSearchResult(val: boolean) {
    toggleOptions.search = val;
  }

  get toggleSearchResult(): boolean {
    return toggleOptions.search;
  }

  set toggleFilter(val: boolean) {
    toggleOptions.filter = val;
  }

  get toggleFilter(): boolean {
    return toggleOptions.filter;
  }
}
