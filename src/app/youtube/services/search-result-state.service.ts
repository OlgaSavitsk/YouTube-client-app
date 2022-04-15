import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs';

import { SearchItem } from '@youtube/models/search-item.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class SearchResultStateService {
  private items$$ = new BehaviorSubject<SearchItem[]>([]);
  public items$ = this.items$$.pipe();

  private item$$ = new BehaviorSubject<SearchItem | null>(null);
  public item$ = this.item$$.pipe();

  constructor(private httpService: HttpService) {}

  initData(searchValue: string | null): void {
    if (searchValue) {
      this.httpService
        .getItems(searchValue)
        .subscribe((items: SearchItem[]) => this.items$$.next(items));
    }
  }

  get(id: string): Subscription {
    return of(this.items$$.value).subscribe((items: SearchItem[]) =>
      items.map((item: SearchItem) => {
        if (id === item.id) {
          this.item$$.next(item);
        }
        return this.item$$;
      }),
    );
  }
}
