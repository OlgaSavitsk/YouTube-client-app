import { SearchItem } from "./search-item.model";

export interface SearchResponse {
    id: number;
    kind: string;
    etag: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    items: SearchItem[];
  }