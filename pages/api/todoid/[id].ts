import { prisma } from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const dataid = req.query.id

    if (req.method === 'DELETE') {
        const note = await prisma.post.delete({
            where: {id: (dataid)}
        })
        res.json(dataid)
    } else {
        console.log('todo could not be created')
    }
    
}
