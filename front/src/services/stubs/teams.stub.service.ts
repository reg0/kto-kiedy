import { ITeamsService } from '@/interfaces/api/teams.service.interface';
import { ITeam } from '@/interfaces/models/team.model.interface';

export class TeamsStubService implements ITeamsService {
  getTeams(): Promise<ITeam[]> {
    return Promise.resolve([
      {
        id: 't001',
        name: 'Vinora',
        peopleCount: 5,
        orderNo: 0,
        color: '#004d99',
      }, {
        id: 't002',
        name: 'ACDC',
        peopleCount: 3,
        orderNo: 1,
        color: '#dddddd',
      },
    ]);
  }
}

export default new TeamsStubService();
