import { Team } from "./team.model";

export class TeamsService {
  async get(id: string): Promise<Team | null> {
    if (id == "abc") {
      return new Team(id, "example", "#00ff00")
    }
    return null
  }

  async list(): Promise<Team[]> {
    return Promise.resolve([
      new Team("abc", "example", "#00ff00"),
      new Team("def", "another team", "#ff0000"),
    ])
  }

  async create(name: string, colorHex: string): Promise<Team> {
    return Promise.resolve(new Team("xyz", name, colorHex))
  }
}

export default new TeamsService()
