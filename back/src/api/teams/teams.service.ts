import { Team } from './team.model';
import db from '../../utils/db'
import { getLogger } from '../../utils/logging';
import { AuthInfo } from '../auth/auth.model';
import { ErrorResponse } from '../commons/errors/error.model';

export class TeamsService {
  private logger = getLogger('TeamsService');

  async get(id: string, authInfo: AuthInfo): Promise<Team | null> {
    this.logger.info("querying team by id = '%s'", [id]);
    const team = await db.queryOne({sql: "select * from teams where id = $1", values: [id], mappingFn: Team.parse});
    if (team) {
      if (team.organization_id != authInfo.orgId) {
        throw new ErrorResponse(401, 'unauthorized')
      }
    } else {
      throw new ErrorResponse(404, 'team not found')
    }
    return team
  }

  async list(authInfo: AuthInfo): Promise<Team[]> {
    this.logger.info("querying all teams");
    return db.queryMany<Team>({sql: 'select * from teams', mappingFn: Team.parse})
  }

  async create(name: string, colorHex: string): Promise<Team | null> {
    return db.insert({sql: 'insert into teams values($1, $2, $3) returning *', values: [db.newId(), name, colorHex], mappingFn: Team.parse});
  }

  
}

export default new TeamsService()
