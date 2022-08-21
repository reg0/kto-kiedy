import { FastifyInstance } from "fastify";
import teamsController from "./teams.controller";

export default (server: FastifyInstance) => {
  server.get('/teams/:id', teamsController.get.bind(teamsController))
  server.get('/teams', teamsController.list.bind(teamsController))
  server.post('/teams', teamsController.create.bind(teamsController))
}