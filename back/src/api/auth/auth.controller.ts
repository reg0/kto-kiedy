import { FastifyReply, FastifyRequest } from "fastify";
import { sendError } from "../commons/errors/error.handler";
import authService, { AuthService } from  "./auth.service";

class AuthController {
 constructor(private authService: AuthService) { }

  public readonly me = async (request: FastifyRequest<{Headers: {authorization: string}}>, reply: FastifyReply) => {
    try {
      return await this.authService.getAuthInfoForToken(request.headers.authorization)
    } catch (err) {
      sendError(err, reply)
    }
  }
}

export default new AuthController(authService)
