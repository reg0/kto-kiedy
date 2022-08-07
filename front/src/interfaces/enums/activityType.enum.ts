export interface ActivityType {
  label: string;
  color: string;
}

export class ActivityTypes {
  static VACATION = { label: 'VACATION', color: '#ff0000' } as ActivityType;
  static SICK = { label: 'SICK', color: '#cccc00' } as ActivityType;
  static LONG_TERM_LEAVE = { label: 'LONG_TERM_LEAVE', color: '#cc00cc' } as ActivityType;
  static OFFICE = { label: 'OFFICE', color: '#0000dd' } as ActivityType;
  static HOME_OFFICE = { label: 'HOME_OFFICE', color: '#00dddd' } as ActivityType;
  static UNDEFINED = { label: 'UNDEFINED', color: '#dddddd' } as ActivityType;
}
