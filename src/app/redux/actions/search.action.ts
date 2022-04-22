import { createAction, props } from '@ngrx/store';

import { SearchItem } from '@youtube/models/search-item.model';

export const addSearchItem = createAction(
  '[SEARCH] add search items',
  props<{ searchItems: SearchItem[] }>(),
);
