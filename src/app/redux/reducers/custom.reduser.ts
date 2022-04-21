import { createReducer, on } from '@ngrx/store';
import { addCustomItem } from '../actions/custom.actions';
import { initialCustomState } from '../state/custom.state';

export const customReduser = createReducer(
  initialCustomState,
  on(addCustomItem, (state, {item}) => {
    console.log(item)
    return {
      ...state,
      customItems: [...state.customItems, item],
    };
  }),
);
