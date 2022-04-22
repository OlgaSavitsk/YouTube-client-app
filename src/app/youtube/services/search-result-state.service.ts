import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import { SearchItem } from '@youtube/models/search-item.model';
import { addSearchItem } from 'src/app/redux/actions/search.action';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class SearchResultStateService {
  searchItems: SearchItem[] = [];
  private items$$ = new BehaviorSubject<SearchItem[]>([]);
  public items$ = this.items$$.pipe();

  private item$$ = new BehaviorSubject<SearchItem | null>(null);
  public item$ = this.item$$.pipe();

  constructor(private httpService: HttpService, private store: Store) {}

  initData(searchValue: string | null): void {
    if (searchValue) {
      this.items$ = this.httpService.getItems(searchValue).pipe(
        take(1),
        tap((items: SearchItem[]) => {
          this.store.dispatch(addSearchItem({ searchItems: items }));
          this.searchItems = items;
        }),
      );
    }
  }

  getSearchData(): Observable<SearchItem[]> {
    return this.items$;
  }

  getSearchItem(id: string): void {
    this.searchItems.map((item: SearchItem) => {
      if (id === item.id) {
        this.item$$.next(item);
      }
      return this.item$;
    });
  }
}
