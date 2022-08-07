import { IPerson }from 'interfaces/models/person.model.interface';
import { IPeopleService }from 'interfaces/api/people.service.interface';
import { ALL } from './activities.stub.service';

export class PeopleService implements IPeopleService {
  async getTeammates(teamId: string): Promise<IPerson[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(teamId === 't001' ? [
          ALL[0],
          ALL[1],
          ALL[2],
          ALL[3],
          ALL[4],
        ] : [
          ALL[0],
          ALL[5],
          ALL[6],
        ]);
      }, 300);
    });
  }
}

export default new PeopleService();
