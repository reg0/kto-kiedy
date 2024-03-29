import 'dotenv/config' 
import fastify from 'fastify'
import authRoutes from './api/auth/auth.routes'
import organizationsRoutes from './api/organizations/organizations.routes'
import teamsRoutes from './api/teams/teams.routes'

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.register((instance, opts, next) => {
  authRoutes(instance)
  organizationsRoutes(instance)
  teamsRoutes(instance)

  next();
}, {prefix: '/api'});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})