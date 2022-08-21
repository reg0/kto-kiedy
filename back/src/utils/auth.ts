import { FastifyReply } from "fastify";
import { AuthInfo, AuthorizedRequest } from "../api/auth/auth.model";
import authService from "../api/auth/auth.service";
import { sendError } from "../api/commons/errors/error.handler";

type DoStuffWithAuthInfoFunction = ((authInfo: AuthInfo) => Promise<any>)

export async function doAuthorized(req: AuthorizedRequest<any>, res: FastifyReply, doStuffFn: DoStuffWithAuthInfoFunction): Promise<FastifyReply | void> {
  const authInfo = await authService.getAuthInfoForToken(req.headers.authorization)
  return doStuffFn(authInfo).catch(err => {
    sendError(err, res)
  })
}