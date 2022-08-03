import { Pool } from 'pg';
import { getLogger } from './logging';
import { v4 as uuidv4 } from 'uuid';

class Db {
  private pool: Pool;
  private logger = getLogger('Db');

  constructor() {
    this.pool = new Pool({connectionString: process.env.DATABASE_URL});
    this.pool.connect();
    
    this.test();
  }

  test() {
    this.pool.query('select now()', (err, res) => {
      if (err) {
        process.exit(1)
      }
      this.logger.info("Database connected")
    });
  }

  async queryOne<RES>(args: {sql: string, values?: Array<any>, mappingFn: (row: any) => RES}): Promise<RES | null> {
    const res = await this.pool.query(args.sql, args.values);
    if (res.rows.length == 0) {
      return null;
    }
    return args.mappingFn(res.rows[0]);
  }

  async queryMany<RES>(args: {sql: string, values?: Array<any>, mappingFn: (row: any) => RES}): Promise<Array<RES>> {
    const res = await this.pool.query(args.sql, args.values);
    return res.rows.map(args.mappingFn);
  }

  async insert<RES>(args: {sql: string, values?: Array<any>, mappingFn?: (row: any) => RES}): Promise<RES | null> {
    const res = await this.pool.query(args.sql, args.values);
    return args.mappingFn ? args.mappingFn(res.rows[0]) : null;
  }

  newId(): string {
    return uuidv4();
  }
}

export default new Db();