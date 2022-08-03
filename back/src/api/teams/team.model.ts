export class Team {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly colorHex: string) { }

  static parse(dbObj: any): Team {
    return new Team(dbObj.id, dbObj.name, dbObj.color_hex);
  }
}
