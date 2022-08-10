import { Organization } from "./organization.model";
import db from '../../utils/db'
import { getLogger } from '../../utils/logging';

export class OrganizationsService {
    private logger = getLogger('OrganizationService');

    async get(id: string): Promise<Organization | null> {
        this.logger.info("querying organization by id = '%s'", [id]);
        return db.queryOne({sql: "select * from organization where id = $1", values: [id], mappingFn: Organization.parse});
    }

    async list(): Promise<Organization[]> {
        this.logger.info("querying all organizations");
        return db.queryMany<Organization>({sql: 'select * from organzation', mappingFn: Organization.Parse})
    }

    async create(name:string): Promise<Organization | null> {
        return db.insert({sql: 'insert into organization values($1, $2) returning *', values: [db.newId(), name], mappingFn: Organization.parse});
    }
}

export default new OrganizationsService()