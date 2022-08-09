export class Organization{
    constructor(
        public readonly id: string,
        public readonly name: string ) {}

        static parse(dbObj: any): Organiztion {
            return new Organization(dbObj.id, dbObj.name);
        }
}