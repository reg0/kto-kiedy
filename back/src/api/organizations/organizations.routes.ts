import { FastifyInstance } from "fastify";
import organizationsController from "./organizations.controller";

export default (server: FastifyInstance) => {
    server.get('/organizations/:id', organizationsController.get.bind(organizationsController))
    server.get('/organizations', organizationsController.list.bind(organizationsController))
    server.post('/organizations', organizationsController.create.bind(organizationsController))
}
