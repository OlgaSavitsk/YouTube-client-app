import { ICustomItem } from 'src/app/admin/models/custom-item.model';

export interface ICustomState {
  customItems: ICustomItem[];
}

export const initialCustomState: ICustomState = {
  customItems: [],
};
