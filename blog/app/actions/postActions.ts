"use server"

import { PostType } from "@/types/postType"
import {redirect} from 'next/navigation'
import prisma from '@/app/utils/prismaClient'
import {supabase} from '../utils/supabaseClient'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const {getUser} = getKindeServerSession();


export  const createPostId =  async ()  => {
    const user = await getUser();
    if(!user) {
        redirect('/')
    }
    
    const post = await prisma.post.create({
        data: {
            authorId: user?.id as string
        }
    })

     return redirect(`/create/${post.id as string}/post`);

}

export const savePost = async (postData: PostType) => {
    const user = await getUser();
    const {
        title,
        content,
        image,
        category
    } = postData;

    const {data: userData} = await supabase.storage.from("nateLog").upload(`${image?.name}-${new Date().toISOString()}`, image as File, {
        cacheControl: '259200',
        contentType: 'image/*'
    })
    

  
}   