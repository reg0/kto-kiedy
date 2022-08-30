export class Employee{
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly forname: string,) {}

        static parse (dbObj: any): Employee {
            return new Employee(dbObj.id, dbObj.name, dbObj.forname);
        }
}