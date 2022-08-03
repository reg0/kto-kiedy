import { Team } from './team.model';
import db from '../../utils/db'
import { getLogger } from '../../utils/logging';

export class TeamsService {
  private logger = getLogger('TeamsService');

  async get(id: string): Promise<Team | null> {
    this.logger.info("querying team by id = '%s'", [id]);
    return db.queryOne({sql: "select * from teams where id = $1", values: [id], mappingFn: Team.parse});
  }

  async list(): Promise<Team[]> {
    this.logger.info("querying all teams");
    return db.queryMany<Team>({sql: 'select * from teams', mappingFn: Team.parse})
  }

  async create(name: string, colorHex: string): Promise<Team | null> {
    return db.insert({sql: 'insert into teams values($1, $2, $3) returning *', values: [db.newId(), name, colorHex], mappingFn: Team.parse});
  }
}

export default new TeamsService()
