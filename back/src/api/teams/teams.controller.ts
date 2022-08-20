import { FastifyReply, FastifyRequest } from "fastify";
import teamsService, { TeamsService } from "./teams.service";

class TeamsController {
  constructor(private teamsService: TeamsService) { }

  async get(request: FastifyRequest<{Params: {id: string, organization_id: string}}>, reply: FastifyReply) {
    return teamsService.get(request.params.id, request.params.organization_id)
  }

  async list(request: FastifyRequest, reply: FastifyReply) {
    return teamsService.list()
  }

  async create(request: FastifyRequest<{Body: {name: string, colorHex: string}}>, reply: FastifyReply) {
    return teamsService.create(request.body.name, request.body.colorHex)
  }
}

export default new TeamsController(teamsService)