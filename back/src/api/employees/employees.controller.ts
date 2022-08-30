import { FastifyReply, FastifyRequest } from "fastify";
import employeesService, { EmplyeesService } from "./employees.service";

class EmployeesController {
  constructor(private employeesService: EmplyeesService)  { }

   async get(request: FastifyRequest<{Params:  {id: string, team_id: string}}>, reply: FastifyReply) {
       return employeesService.get(request.params.id, request.params.team_id)
   }

   async list(request: FastifyRequest, reply: FastifyReply) {
       return employeesService.list()
   }

   async create(request: FastifyRequest<{Body: {name: string, forname: string}}>, reply: FastifyReply) {
       return employeesService.create(request.body.name, request.body.forname)
   }
}

export default new EmployeesController(employeesService)