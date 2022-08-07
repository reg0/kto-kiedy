import { IPerson } from "../models/person.model.interface";

export interface IPeopleService {
  getTeammates(teamId: string): Promise<IPerson[]>;
}