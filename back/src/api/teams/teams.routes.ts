import { FastifyInstance } from "fastify";
import teamsController from "./teams.controller";

export default (server: FastifyInstance) => {
  server.get('/teams/:id', teamsController.get)
  server.get('/teams', teamsController.list)
  server.post('/teams', teamsController.create)
}