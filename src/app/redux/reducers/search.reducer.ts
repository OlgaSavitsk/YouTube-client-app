import { createReducer, on } from '@ngrx/store';

import { addSearchItem } from '../actions/search.action';
import { initialSearchState } from '../state/search.state';

export const searchReduser = createReducer(
  initialSearchState,
  on(addSearchItem, (state, { searchItems }) => ({
    ...state,
    searchItems: [...searchItems],
  })),
);
