import { ActionReducerMap } from '@ngrx/store';

import { ICustomState } from '../state/custom.state';
import { customReduser } from './custom.reduser';

export interface AppState {
  customItems: ICustomState;
}

export const reducers: ActionReducerMap<AppState> = {
  customItems: customReduser,
};
