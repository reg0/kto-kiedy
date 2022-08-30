import { Employee } from './employee.model';
import db from '../../utils/db';
import { getLogger } from '../../utils/logging';

export class EmployessService {
  private logger = getLogger('emplyeesService');
    
  async get(id: string, teamId: string): Promise<Employee | null> {
    this.logger.info("querying emplyee by id = %s", [id]);
    return db.queryOne({sql: "select * from employees where id = $1", values: [id], mappingFn: Employee.parse})
}

  async list(): Promise<Employee[]> {
    this.logger.info("querying all items");
    return db.queryMany<Employee>({sql: 'select * from employees', mappingFn: Employee.parse})
  }

  async create(id: string, name: string, surname: string, teamId: string): Promise<Employee | null> {
    const employee = await db.insert({sql: 'insert into employees values($1, $2, $3, $4) returning *', values: [db.newId(), name, surname, teamId], mappingFn: Employee.parse});
    return db.insert({sql: 'insert into employees_teams values ($1, $2) returning *', values: [id, teamId], mappingFn: Employee.parse});
  }
}
