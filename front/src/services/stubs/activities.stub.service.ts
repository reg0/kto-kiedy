import { IScheduleService }from 'interfaces/api/schedule.service.interface';
import { getArrayOfDates }from 'utils/date.utils';
import { IActivity }from 'interfaces/models/actvity.model.interface';
import { Activity }from 'models/activity.model';
import { ActivityTypes }from 'interfaces/enums/activityType.enum';
import { IPersonWithSchedule }from 'interfaces/models/person.model.interface';
import { Person }from 'models/person.model';
import { PersonWithSchedule }from 'models/personWithSchedule.model';

export const ALL = [
  new Person('p0000', 'Kamil', 'Mikula'),
  new Person('p0001', 'Piotr', 'Flisak'),
  new Person('p0002', 'Krystian', 'Przerwa-Tetmajer'),
  new Person('p0003', 'Pawel', 'Smyczewski'),
  new Person('p0004', 'Lukasz', 'Bocian'),
  new Person('p0006', 'Stanislav', 'Tachman'),
  new Person('p0007', 'Benjamin', 'Tostojad'),
];

export class ScheduleService implements IScheduleService {
  async getSchedule(teamId: string, peopleIds: string[], isoDateFrom: string, isoDateTo: string): Promise<IPersonWithSchedule[]> {
    const filteredPeople = ALL.filter((person) => peopleIds.indexOf(person.id) >= 0);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          filteredPeople.map((person) => {
            const activities: IActivity[] = getArrayOfDates(isoDateFrom, isoDateTo).map((date) => {
              const { isoDate } = date;
              return Math.random() > 0.6 ? new Activity(
                `a${person.id}_${isoDate}`,
                isoDate,
                Math.random() > 0.8 ? ActivityTypes.OFFICE : ActivityTypes.HOME_OFFICE,
                Math.random() > 0.6 ? 'public comment' : '',
                Math.random() > 0.9 ? 'comment for manager' : '',
              ) : null;
            }).filter((a) => !!a) as IActivity[];
            return new PersonWithSchedule(person.id, person.firstName, person.lastName, activities);
          }),
        );
      }, 200);
    });
  }
}

export default new ScheduleService();
