import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  getYoutubeItemsIds,
  SEARCH_URL,
  STATISTICS_URL,
} from '@youtube/constants/api-constants';
import { SearchItem } from '@youtube/models/search-item.model';
import { SearchResponse } from '@youtube/models/search-response.model';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getItems(searchValue: string): Observable<SearchItem[]> {
    return this.getYotubeData(searchValue).pipe(
      switchMap((data: SearchResponse) => {
        const searchResultIds: string = getYoutubeItemsIds(data);
        return this.getYoutubeDataWithStat(searchResultIds);
      }),
      map((data: SearchResponse) => data.items.map((item: SearchItem) => item)),
    );
  }

  private getYotubeData(searchValue: string): Observable<any> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResult', '10')
      .set('q', searchValue)
      .set('type', 'video');
      console.log(typeof this.http.get<SearchResponse>(SEARCH_URL, { params }))
    return this.http.get<SearchResponse>(SEARCH_URL, { params });
  }

  private getYoutubeDataWithStat(searchResultIds: string): Observable<any> {
    const params = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('id', searchResultIds);
    return this.http.get<SearchResponse>(STATISTICS_URL, { params });
  }
}
