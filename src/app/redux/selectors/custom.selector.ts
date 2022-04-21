import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ICustomState } from '../state/custom.state';

export const featureSelector = createFeatureSelector<ICustomState>('customItems');
export const customSelector = createSelector(
    featureSelector,
  (state : ICustomState) => state.customItems,
);
