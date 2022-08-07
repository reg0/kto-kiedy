import { ActivityType } from '@/interfaces/enums/activityType.enum';
import { IPersonWithSchedule } from '@/interfaces/models/person.model.interface';

export interface IScheduleStatsService {
  getStats(schedule: IPersonWithSchedule[], activityTypes: ActivityType[]): Promise<{[activityTypeLabel: string]: {[isoDate: string]: number}}>;
}