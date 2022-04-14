import { Pipe, PipeTransform } from '@angular/core';

import { SortParam } from 'src/app/app.constants';
import { SearchItem } from '@youtube/models/search-item.model';

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
    if (param === SortParam.dateParam) {
      this.sort(value, isDeskDate, this.sortByDate);
    }
    if (param === SortParam.viewParam) {
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
