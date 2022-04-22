import { SearchItem } from '@youtube/models/search-item.model';

export interface ISearchState {
  searchItems: SearchItem[];
}

export const initialSearchState: ISearchState = {
  searchItems: [],
};
