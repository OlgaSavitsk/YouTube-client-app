import { createAction, props } from '@ngrx/store';

import { ICustomItem } from 'src/app/admin/models/custom-item.model';

export const addCustomItem = createAction(
  '[CUSTOM] add custom item',
  props<{ item: ICustomItem }>(),
);
