'use client'

import { getPost } from "@/app/utils/getAllPosts"
import { Posts } from "@/types/postType"
import BlogCard from './BlogCard'
import { useEffect, useState } from "react"
const Blogs = () => {
    const [posts, setPosts] = useState<Posts[] | null>(null);


    useEffect(() => {
        const savePosts = async () => {
            const postData = await getPost();
            setPosts(postData);
        }

        // run the function on mount 
        savePosts()

    }, [])
    return (
        <div className="mt-10">
            <div>
                {posts?.map((post, i)=> {
                    return(
                        <BlogCard key={i} post={post}/>
                    )
                })}
            </div>

        </div>
    )
}

export default Blogs