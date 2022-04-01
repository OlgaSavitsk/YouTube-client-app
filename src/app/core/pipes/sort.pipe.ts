import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'app/search/models/search-item.model';

export interface IDesk {
    date: boolean;
    view: boolean;
    sort: string;
}

export const sortDesk: IDesk = {
    date: false,
    view: false,
    sort: '',
};

@Pipe({
    name: 'sort',
})
export class SortPipe implements PipeTransform {
    transform(
        value: SearchItem[],
        isDesk: boolean
    ): SearchItem[] {
        const desk = isDesk ? 1 : -1;
        if (sortDesk.sort === 'date') {
            this.sortByDate(value, desk);
        }
        if (sortDesk.sort === 'view') {
            this.sortByView(value, desk);
        }
        return value;
    }

    sortByDate(data: SearchItem[], desk: number): SearchItem[] {
        const sorted = data.sort((a: SearchItem, b: SearchItem) =>
            new Date(a.snippet.publishedAt).getTime() <
            new Date(b.snippet.publishedAt).getTime()
                ? 1 * desk
                : -1 * desk,
        );
        return sorted;
    }

    sortByView(data: SearchItem[], desk: number): SearchItem[] {
        const sorted = data.sort((a: SearchItem, b: SearchItem) =>
            Number(a.statistics.viewCount) > Number(b.statistics.viewCount)
                ? 1 * desk
                : -1 * desk,
        );
        return sorted;
    }
}
