'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import RestBlogs from '@/app/_components/RestBlogs/RestBlogs'
import { Posts } from '@/types/postType'
import { getSinglePost } from '@/app/utils/getAllPosts'

const BlogPage = ({
    params
}: {
    params: {
        id: string
    }
}) => {
    const [post, setPost] = useState<Posts | null>(null);

    useEffect(() => {
        const getPost = async () => {
            const fetchedPost = await getSinglePost(params.id);
            setPost(fetchedPost);
        }
        getPost();
    }, []);
    const text = post?.body as string;
    const paragraphs = text?.split('</p>').filter(Boolean)
    return (
        <div
            className="max-w-[1500px] mx-auto mt-5"
        >

            <div
                className="
            max-w-[1000px]
            flex
            flex-col
            items-start
            mx-auto
            max-lg:px-8
            ">
                <h1 className="mb-5 text-[48px] dark:text-muted-foreground text-[#022140] font-bold"> {post?.title}</h1>
                <div className="text-[#687081]text-[16px]"
                >
                    {post?.createdAt.toUTCString().split(' ').slice(0, 4).join(" ")}
                </div>
                <div
                    className="
                mt-1
                dark:text-muted-foreground
                text-[#687081]text-[16px]"
                >
                    2 Minutes Read
                </div>
                <div
                    className="
                bg-[#687081]
                text-white
                dark:text-muted-foreground
                dark:border-border
                border
                p-1
                rounded-sm
                text-[16px]
                font-bold
                transtion-colors
                hover:bg-blue-500
                mb-1
                mt-2
                "
                >
                    {post?.category}
                </div>

                <div className="
                h-[500px]
                mt-5
                w-full relative">
                    <Image
                        alt='post image'
                        src={`https://jjghnotanxljscpakcuz.supabase.co/storage/v1/object/public/nateLog/${post?.imageLink}`}
                        fill
                        className="
                    object-cover
                    rounded-sm
                    "
                    />
                </div>
            </div>
            <section
                className="max-w-[1100px] mx-auto border-t dark:border-t-border pt-6 mt-5"
            >
                <div
                    
                    className="grid max-lg:px-8 mt-11  gap-6 lg:grid-cols-3"
                >
                    {/* blog */}
                    <div className=" lg:col-span-2 ">
                        <h1 className="text-[#687081] text-xl mb-4">By <span className="text-[#022140] font-bold">{post?.author.name}</span></h1>
                        <div className="lg:max-w-[90%] max-lg:w-full lg:border lg:dark:border-border lg:p-5">
                            {paragraphs?.map((paragraph, index) => (
                                <p className="mb-2"key={index} dangerouslySetInnerHTML={{ __html: paragraph + '</p>' }} />
                            ))}
                        </div>
                    </div>
                    <RestBlogs />

                </div>
            </section>
        </div>
    )
}

export default BlogPage