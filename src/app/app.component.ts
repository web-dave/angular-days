import { Component } from '@angular/core';
import * as moment from 'moment';
import { isValid, parseISO, lastDayOfMonth, subDays, sub } from 'date-fns';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  date: string = '2022-04-32';
  title = 'angular-days';
  lastDay: any;
  setDate(e: Event) {
    this.date = (e.target as HTMLInputElement).value;
  }

  validateMoment(date: string) {
    return moment(date).isValid();
  }

  validateDateFns(date: string) {
    return isValid(parseISO(date));
  }

  validateDayJs(date: string) {
    dayjs.extend(customParseFormat);
    return dayjs(date, 'YYYY-MM-DD', true).isValid();
  }

  validateLuxon(date: string) {
    console.log(DateTime.fromISO(date));
    return DateTime.fromISO(date).isValid;
  }

  lastDayOfMonthMoment(date: string) {
    return moment(date, 'YYYY-MM-dd').subtract(1, 'months').daysInMonth();
  }
  lastDayOfMonthDateFns(date: string) {
    return lastDayOfMonth(sub(parseISO(date), { months: 1 }));
  }
  lastDayOfMonthDayJs(date: string) {
    dayjs.extend(customParseFormat);
    return dayjs(date, 'YYYY-MM-DD', true).subtract(1, 'month').daysInMonth();
  }
  lastDayOfMonthLuxon(date: string) {
    return DateTime.fromISO(date).plus({ month: -1 }).daysInMonth;
  }
  minus1DayMoment(date: string) {
    return moment(date).subtract(1, 'days').format('YYYY-MM-DD');
  }
  minus1DayDateFns(date: string) {
    return subDays(parseISO(date), 1);
  }
  minus1DayDayjs(date: string) {
    dayjs.extend(customParseFormat);
    return dayjs(date, 'YYYY-MM-DD', true)
      .subtract(1, 'day')
      .format('YYYY-MM-DD');
  }
  minus1DayLuxon(date: string) {
    return DateTime.fromISO(date).plus({ days: -1 });
  }
}
