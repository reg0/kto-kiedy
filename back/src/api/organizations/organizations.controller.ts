import { FastifyReply, FastifyRequest } from "fastify";
import organizationService, { OrganizationsService } from  "./organizations.service";

class OrganizationsController {
 constructor(private organizationService: OrganizationsService)   {}

async get(request: FastifyRequest<{Params: {id: string}}>, reply: FastifyReply) {
    return organizationService.get(request.params.id)
}

async list(request: FastifyRequest, reply: FastifyReply) {
    return organizationService.list()
}

async create(request: FastifyRequest<{Body: {name: string,}}>, reply: FastifyReply) {
    return organizationService.create(request.body.name)
}
}

export default new OrganizationsController(organizationService)