import { IHolidaysService } from '@/interfaces/api/holidays.service.interface';
import { getArrayOfDates, MyDate } from '@/utils/date.utils';

const PERMANENT_HOLIDAYS = [
  [1, 1],
  [25, 12],
];

export class HolidaysService implements IHolidaysService {
  getHolidays(isoDateFrom: string, isoDateTo: string): Promise<string[]> {
    return Promise.resolve(
      getArrayOfDates(isoDateFrom, isoDateTo)
        .filter((d) => d.dayOfWeek === 6 || d.dayOfWeek === 7 || PERMANENT_HOLIDAYS.some((h) => d.day === h[0] && d.month === h[1]))
        .map((d) => d.isoDate),
    );
  }

  isWeekend(d: string | MyDate) {
    const date = d instanceof MyDate ? d : getArrayOfDates(d, d)[0];
    return date.dayOfWeek === 6 || date.dayOfWeek === 7;
  }
}

export default new HolidaysService();
