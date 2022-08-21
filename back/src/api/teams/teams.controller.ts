import { FastifyReply, FastifyRequest } from "fastify";
import { doAuthorized } from "../../utils/auth";
import { AuthInfo, AuthorizedRequest } from "../auth/auth.model";
import authService, { AuthService } from "../auth/auth.service";
import { sendError } from "../commons/errors/error.handler";
import teamsService, { TeamsService } from "./teams.service";

interface GetTeamRequestParams {
  id: string
}

class TeamsController {
  constructor(private teamsService: TeamsService, private authService: AuthService) { }

  async get(request: AuthorizedRequest<GetTeamRequestParams>, reply: FastifyReply) {
    return doAuthorized(request, reply, (authInfo: AuthInfo) => {
      return this.teamsService.get(request.params.id, authInfo)
    })
  }

  async list(request: AuthorizedRequest<null>, reply: FastifyReply) {
    const authInfo = await this.authService.getAuthInfoForToken(request.headers.authorization)
    try {
      return await this.teamsService.list(authInfo)
    } catch (err) {
      sendError(err, reply)
    }
  }

  async create(request: FastifyRequest<{Body: {name: string, colorHex: string}}>, reply: FastifyReply) {
    return teamsService.create(request.body.name, request.body.colorHex)
  }
}

export default new TeamsController(teamsService, authService)