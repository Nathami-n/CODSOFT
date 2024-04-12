'use server'
import prisma from '@/app/utils/prismaClient'

export const getPost =  async () => {
    const data = await prisma.post.findMany({
    select: {
        title: true,
        body: true,
        id: true,
        authorId: true,
        category: true,
        imageLink: true,
    }
    })

    return data;
}