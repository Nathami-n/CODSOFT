"use server"
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

export const savePost = async (formData: FormData, content: string, postId: string) => {

    const title = formData.get("title") as string;
    const photo = formData.get("image") as File;
    const category = formData.get("category") as string;
    
    

    if(!title || !photo || !category) {
        return
    }
    // upload the photo

    const {data: imageData, error} = await supabase.storage.from("nateLog").upload(`${photo.name}-${new Date().toISOString()}`, photo, {
        cacheControl:'259200',
        contentType: 'image/*'
    });
     
    if( error) {
        console.error(error)
        return
    }

    
    // update the file in database

    const updatedFile = await prisma.post.update({
        where: {
            id: postId as string
        },
        data:{
            title: title,
            imageLink: imageData?.path as string,
            category: category.trim().toLowerCase(),
            body: content as string,
            complete: true,
        }
    })
    
    return updatedFile?.imageLink;
}   

export const takeHome = async () => {
    return redirect('/');
}