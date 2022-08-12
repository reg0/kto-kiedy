import 'dotenv/config' 
import fastify from 'fastify'
import teamsRoutes from './api/teams/teams.routes'
import organizationsRoutes from './api/organizations/organizations.routes'

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

teamsRoutes(server)
organizationsRoutes(server)

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})