import { Pipe, PipeTransform } from '@angular/core';

import { SearchItem } from '@search/models/search-item.model';

@Pipe({
  name: 'filter',
})
export default class FilterPipe implements PipeTransform {
  transform(value: SearchItem[], searchWord: string): SearchItem[] {
    if (value && searchWord) {
      return value.filter(
        (item: SearchItem) => item.snippet.title.toLowerCase().indexOf(searchWord) > -1,
      );
    }
    return value;
  }
}
