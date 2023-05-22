import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionID = req.cookies.sessionID

  if (!sessionID) {
    return reply.status(401).send({
      error: 'Unauthorized',
    })
  }
}
