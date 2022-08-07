import { IPersonWithSchedule } from '@/interfaces/models/person.model.interface';
import { IActivity } from '@/interfaces/models/actvity.model.interface';
import { Person } from './person.model';

export class PersonWithSchedule extends Person implements IPersonWithSchedule {
  constructor(id: string, firstName: string, lastName: string, protected activities: IActivity[]) {
    super(id, firstName, lastName);
  }

  get activitiesPerDay(): IActivity[] {
    return this.activities;
  }
}
