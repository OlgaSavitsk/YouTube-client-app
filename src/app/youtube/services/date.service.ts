import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class DateService {

  constructor() { }

  getDateDiff(publishedAt: string): number {
    const today = new Date().getTime();
    const dateFrom = new Date(publishedAt).getTime();
    const diffDay = today - dateFrom;
    return diffDay;
  }
}
