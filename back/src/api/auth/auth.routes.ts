import { FastifyInstance } from "fastify";
import authController from "./auth.controller";

export default (server: FastifyInstance) => {
    server.get('/me', authController.me)
}
