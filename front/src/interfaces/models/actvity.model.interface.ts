import { ActivityType } from '../enums/activityType.enum';

export interface IActivity {
  id: string;
  isoDate: string;
  type: ActivityType;
  commentPublic: string;
  commentForSuperior: string;
}