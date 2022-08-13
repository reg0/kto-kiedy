import { FastifyInstance } from "fastify";
import organizationsController from "./organizations.controller";

export default (server: FastifyInstance) => {
    server.get('/organizations/:id', organizationsController.get)
    server.get('/organizations', organizationsController.list)
    server.post('/organizations', organizationsController.create)
}
