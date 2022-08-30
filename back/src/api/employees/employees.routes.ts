import { FastifyInstance } from "fastify";
import employeesController from "./employees.controller";

export default (server: FastifyInstance) => {
    server.get('/team/team:id/employees', employeesController.get)
    server.get('/employees', employeesController.list)
    server.post('/employees', employeesController.create)
}