import { FastifyReply } from "fastify";

export function sendError(err: any, reply: FastifyReply) {
  if (err.httpCode) {
    return reply.code(err.httpCode).send(err.message)
  }
  return reply.code(500).send(err)
}