import { IActivityTypesService }from 'interfaces/api/activityTypes.service.interface';
import { ActivityTypes, ActivityType }from 'interfaces/enums/activityType.enum';

export class ActivityTypesStubService implements IActivityTypesService {
  getActivityTypes(teamId: string): Promise<ActivityType[]> { // eslint-disable-line @typescript-eslint/no-unused-vars
    return Promise.resolve([ActivityTypes.HOME_OFFICE, ActivityTypes.OFFICE, ActivityTypes.VACATION, ActivityTypes.UNDEFINED]);
  }
}

export default new ActivityTypesStubService();
