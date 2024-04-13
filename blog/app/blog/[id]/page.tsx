'use client'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import { Posts } from '@/types/postType'
import {getSinglePost} from '@/app/utils/getAllPosts'

const BlogPage = ({
    params
}: {
    params:{
        id: string
    }
}) => {
    const [post, setPost] = useState<Posts |null>(null);

    useEffect(()=>{
        const getPost = async () => {
            const fetchedPost = await getSinglePost(params.id);
            setPost(fetchedPost);
        }
        getPost();
    }, []);
    return (
        <div
        className="max-w-[1500px] mx-auto"
        >

            <div 
            className="
            max-w-[1000px]
            flex
            flex-col
            items-start
            mx-auto
            ">
                <h1 className="mb-5 text-[48px] text-[#022140]"> {post?.title}</h1>
                <div className="text-[#687081]text-[16px]"
                >
                    November 28, 2023
                </div>
                <div
                className="text-[#687081]text-[16px]"
                >
                    2 Minutes Read
                </div>
                <div
                className="
                bg-[#687081]
                text-white
                border
                p-1
                rounded-sm
                text-[16px]
                font-bold
                transtion-colors
                hover:bg-blue-500
                "
                >
                 {post?.category}
                </div>

                <div className="h-full relative">
                    <Image alt='post image' 
                    src={`https://jjghnotanxljscpakcuz.supabase.co/storage/v1/object/public/nateLog/${post?.imageLink}`}
                    fill
                    />
                </div>
            </div>

        </div>
    )
}

export default BlogPage