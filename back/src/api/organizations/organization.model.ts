export class Organization{
    constructor(
        public readonly id: string,
        public readonly name: string ) {}

        static parse(dbObj: any): Organization {
            return new Organization(dbObj.id, dbObj.name);
        }
}