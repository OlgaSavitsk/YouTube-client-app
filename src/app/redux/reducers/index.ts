import { ActionReducerMap } from '@ngrx/store';

import { ICustomState } from '../state/custom.state';
import { ISearchState } from '../state/search.state';
import { customReduser } from './custom.reduser';
import { searchReduser } from './search.reducer';

export interface AppState {
  customItems: ICustomState;
  searchItems: ISearchState
}

export const reducers: ActionReducerMap<AppState> = {
  customItems: customReduser,
  searchItems: searchReduser
};
