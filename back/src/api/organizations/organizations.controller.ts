import { FastifyReply, FastifyRequest } from "fastify";
import organizationsService, { OrganizationsService } from  "./organizations.service";

class OrganizationsController {
 constructor(private organizationService: OrganizationsService)   { }

    async get(request: FastifyRequest<{Params: {id: string}}>, reply: FastifyReply) {
        return organizationsService.get(request.params.id)
    }

    async list(request: FastifyRequest, reply: FastifyReply) {
        return organizationsService.list()
    }

    async create(request: FastifyRequest<{Body: {name: string,}}>, reply: FastifyReply) {
        return organizationsService.create(request.body.name)
    }
}

export default new OrganizationsController(organizationsService)