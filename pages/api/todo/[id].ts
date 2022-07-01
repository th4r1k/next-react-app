import { prisma } from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dataid = req.query.id

  if (req.method === 'DELETE') {
    await prisma.todo.delete({
      where: { id: Number(dataid) },
    })
    res.json(dataid)
  } else {
    console.log('todo could not be created')
  }
}
