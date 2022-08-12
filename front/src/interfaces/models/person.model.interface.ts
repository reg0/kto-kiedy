import { IActivity } from './actvity.model.interface';

export interface IPerson {
  id: string;
  firstName: string;
  lastName: string;
  initials: string;
}

export interface IPersonWithSchedule extends IPerson {
  activitiesPerDay: IActivity[];
}