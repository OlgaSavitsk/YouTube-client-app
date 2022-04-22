import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ICustomState } from '../state/custom.state';
import { ISearchState } from '../state/search.state';

export const featureCustomSelector = createFeatureSelector<ICustomState>('customItems');

export const featureSearchSelector = createFeatureSelector<ISearchState>('searchItems');

export const customSelector = createSelector(
  featureCustomSelector,
  (state: ICustomState) => state.customItems,
);

export const searchSelector = createSelector(
  featureSearchSelector,
  ({ searchItems }: ISearchState) => searchItems,
);
