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
        createdAt: true
    },
    orderBy:{
        createdAt: 'desc'
    }
    })

    return data;
}

export const getPosts = async () => {
    const data = await prisma.post.findMany({
        select: {
            title: true,
            body: true,
            id: true,
            authorId: true,
            category: true,
            imageLink: true,
            createdAt: true
        },
        orderBy: {
            createdAt:'asc'
        }
    })

    return data;
}

export const getSinglePost = async (id:string) => {
    const post = await prisma.post.findUnique({
        where: {
            id: id as string
        }
    })

    return post

}