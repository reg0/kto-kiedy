import { ActivityType }from 'interfaces/enums/activityType.enum';
import { IActivity }from 'interfaces/models/actvity.model.interface';

export class Activity implements IActivity {
  constructor(
    public readonly id: string,
    public readonly isoDate: string,
    public readonly type: ActivityType,
    public readonly commentPublic: string,
    public readonly commentForSuperior: string,
  ) { }
}
