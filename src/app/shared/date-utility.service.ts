import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilityService {

  constructor(private http: HttpClient) { }

  totalMonths(startDate: Date, endDate: Date): number {
    let months = 0;
    months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months += endDate.getMonth() - startDate.getMonth() + 1;
    return months <= 0 ? 0 : months;
  }

  monthsWorked(totalMonths: number): number {
    return totalMonths % 12;
  }

  yearsWorked(totalMonths: number): number {
    return Math.floor(totalMonths / 12);
  }

  // yearsWorked(startDate: Date, endDate: Date) {
  //   const yearsWorked: number = Math.floor((endDate.valueOf() - startDate.valueOf()) / (1000 * 60 * 60 * 24 * 365)) || 0;
  //   console.log(yearsWorked);
  //   return yearsWorked;
  // }

  timeWorked(years, months): string {
    const yearsText = this.pluralDateString('year', years);
    const monthsText = this.pluralDateString('month', months);
    // console.log(yearsText, monthsText);
    return `${yearsText}${years && months ? ' ' : ''}${monthsText}`;
  }

  pluralDateString(dateSegment, amount): string {
    let text = '';
    if (amount) {
      text = `${amount} ${dateSegment}`;
    }
    if (amount > 1) {
      text += 's';
    }
    return text;
  }

}
