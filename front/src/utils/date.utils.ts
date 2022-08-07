/* eslint-disable no-await-in-loop, no-constant-condition */

import * as moment from 'moment';

export const SCALE_MONTHLY = 31;
export const SCALE_BIWEEKLY = 14;
export const SCALE_WEEKLY = 7;

const ISO_DATE_ONLY = 'YYYY-MM-DD';

export class MyDate {
  day: number;
  month: number;
  year: number;
  week: number;
  dayOfWeek: number;
  constructor(public readonly isoDate: string) {
    const m = moment.utc(isoDate);
    this.day = m.date();
    this.month = m.month();
    this.year = m.year();
    this.week = m.isoWeek();
    this.dayOfWeek = m.isoWeekday();
  }
}

export async function asyncForEachDate(isoDateFrom: string, isoDateTo: string, doStuff: Function): Promise<void> {
  let i = moment.utc(isoDateFrom);

  while (true) {
    const iIso = i.format(ISO_DATE_ONLY);
    await doStuff(iIso);
    if (iIso === isoDateTo) {
      break;
    }
    i = i.add(1, 'day');
  }
}

export function getArrayOfDates(isoDateFrom: string, isoDateTo: string): MyDate[] {
  const result = [];
  let i = moment.utc(isoDateFrom);

  while (true) {
    const iIso = i.format(ISO_DATE_ONLY);
    result.push(new MyDate(iIso));
    if (iIso === isoDateTo) {
      break;
    }
    i = i.add(1, 'day');
  }

  return result;
}

export function updateDateFrom(isoDateFrom: string, scale: number, delta: number): string {
  switch (scale) {
    case SCALE_MONTHLY: {
      return moment.utc(isoDateFrom)
        .date(1)
        .add(delta, 'month')
        .format(ISO_DATE_ONLY);
    }
    case SCALE_WEEKLY:
    case SCALE_BIWEEKLY: {
      return moment.utc(isoDateFrom)
        .day(1)
        .add(delta, 'week')
        .format(ISO_DATE_ONLY);
    }
    default: {
      console.error(`Incorrect scale ${scale}`);
      return moment.utc(isoDateFrom)
        .day(1)
        .add(delta, 'week')
        .format(ISO_DATE_ONLY);
    }
  }
}

export function findDateTo(isoDateFrom: string, scale: number): string {
  switch (scale) {
    case SCALE_MONTHLY: {
      return moment.utc(isoDateFrom)
        .date(1)
        .add(1, 'month')
        .add(-1, 'day')
        .format(ISO_DATE_ONLY);
    }
    case SCALE_WEEKLY:
    case SCALE_BIWEEKLY: {
      return moment.utc(isoDateFrom)
        .day(1)
        .add(scale - 1, 'day')
        .format(ISO_DATE_ONLY);
    }
    default: {
      console.error(`Incorrect scale ${scale}`);
      return moment.utc(isoDateFrom)
        .day(1)
        .add(SCALE_BIWEEKLY - 1, 'day')
        .format(ISO_DATE_ONLY);
    }
  }
}
/* eslint-enable no-await-in-loop, no-constant-condition */
