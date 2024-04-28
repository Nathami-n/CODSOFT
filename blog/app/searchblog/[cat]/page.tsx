import PostCard from "@/app/allblogs/PostCard";
import prisma from "@/app/utils/prismaClient";
import { redirect } from "next/navigation";

const fetchPosts = async (category: string) => {
    const posts = await prisma.post.findMany({
        where: {
            category: category,
            complete: true
        },
        select: {
            id: true,
            title: true,
            imageLink: true,
            body: true,
            category: true,
            authorId: true,
            createdAt: true,
            author: true
        }
    });

    return posts;
};

const SearchBlog = async ({
    params
}: {
    params: {
        cat: string
    }
}) => {
    
    const posts = await fetchPosts(params.cat.toLowerCase());
    
    if(posts.length === 0) {
        redirect('/noblogs');
    }

    return (
        <div className="px-3">
        <h1 className="mb-2 font-bold">{params.cat.toUpperCase()}</h1>
        <div className="flex gap-2 items-center flex-wrap">
            {posts.map((post) => {
                return <PostCard key={post.id} post={post} />
            })}
            </div>
            </div>
    )
};

export default SearchBlog;