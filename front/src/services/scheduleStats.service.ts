import { IActivity } from '@/interfaces/models/actvity.model.interface';
import { IPersonWithSchedule } from '@/interfaces/models/person.model.interface';
import { IScheduleStatsService } from './scheduleStats.service.interface';

export class ScheduleStatsService implements IScheduleStatsService {
  getStats(schedule: IPersonWithSchedule[]): Promise<{[activityTypeLabel: string]: {[isoDate: string]: number}}> {
    return Promise.resolve(schedule.reduce((result: {[activityTypeLabel: string]: {[isoDate: string]: number}}, personSchedule: IPersonWithSchedule) => {
      /* eslint-disable no-param-reassign */
      personSchedule.activitiesPerDay.forEach((activity: IActivity) => {
        if (!result[activity.type.label]) {
          result[activity.type.label] = {};
        }
        if (!result[activity.type.label][activity.isoDate]) {
          result[activity.type.label][activity.isoDate] = 0;
        }
        result[activity.type.label][activity.isoDate] += 1;
      });
      return result;
      /* eslint-enable no-param-reassign */
    }, {}) as {[activityTypeLabel: string]: {[isoDate: string]: number}});
  }
}

export default new ScheduleStatsService();
