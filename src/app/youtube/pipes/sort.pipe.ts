import { Pipe, PipeTransform } from '@angular/core';

import { SortParam } from 'src/app/app.constants';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

export interface IDesk {
  date: boolean;
  view: boolean;
}

export const sortDesk: IDesk = {
  date: false,
  view: false,
};

@Pipe({
  name: 'sort',
})
export default class SortPipe implements PipeTransform {
  transform(
    value: SearchItem[],
    param: string | undefined,
    isDeskDate: boolean | undefined,
    isDeskView: boolean | undefined,
  ): SearchItem[] {
    if (param === SortParam.date) {
      this.sort(value, isDeskDate, this.sortByDate);
    }
    if (param === SortParam.view) {
      this.sort(value, isDeskView, this.sortByView);
    }
    return value;
  }

  private sort(data: SearchItem[], desk: boolean | undefined, action: Function) {
    const sorted = data.sort((a: SearchItem, b: SearchItem) => (action(a, b) ? -1 : 1));
    if (!desk) sorted.reverse();
    return sorted;
  }

  private sortByDate(a: SearchItem, b: SearchItem): boolean {
    return (
      new Date(a.snippet.publishedAt).getTime() <
      new Date(b.snippet.publishedAt).getTime()
    );
  }

  private sortByView(a: SearchItem, b: SearchItem): boolean {
    return Number(a.statistics.viewCount) > Number(b.statistics.viewCount);
  }
}
