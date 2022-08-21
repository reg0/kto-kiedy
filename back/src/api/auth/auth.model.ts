import { FastifyRequest } from "fastify";

export class AuthInfo {
  constructor(
    public readonly employeeId: string,
    public readonly name: string,
    public readonly surname: string,
    public readonly orgId: string,
    public readonly orgName: string,
    public readonly admin: boolean
  ) { }
}

interface AuthHeaders {
  authorization: string
}

export type AuthorizedRequest<T> = FastifyRequest<{Params: T, Headers: AuthHeaders}>
export type AuthorizedRequestWithBody<T, R> = FastifyRequest<{Params: T, Body: R, Headers: AuthHeaders}>