import { ITeam } from '../models/team.model.interface';

export interface ITeamsService {
  getTeams(): Promise<ITeam[]>;
}