export interface IHolidaysService {
  getHolidays(isoDateFrom: string, isoDateTo: string): Promise<string[]>;
}
