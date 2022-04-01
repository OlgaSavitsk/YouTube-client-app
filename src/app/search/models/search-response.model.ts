import { SearchItem } from "./search-item.model";

export interface SearchResponse {
    id: number;
    kind: string;
    etag: string;
    pageInfo: SearchPageInfo;
    items: SearchItem[];
  }

  export interface SearchPageInfo {
    totalResults: number;
    resultsPerPage: number;
  }
