import { FastifyReply, FastifyRequest } from "fastify";
import organizationService, { OrganizationService } from  "./organization.service";

class OrganizationController {
 constructor(private organizationService: OrganizationService)   {}

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

export default new OrganizationController(organizationService)