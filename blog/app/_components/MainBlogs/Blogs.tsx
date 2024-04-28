'use client'

import { getPost } from "@/app/utils/getAllPosts"
import { Posts } from "@/types/postType"
import BlogCard from './BlogCard'
import { useEffect, useState } from "react"
import BlogsFallBack from "./BlogsFallBack"
const Blogs = () => {
    const [posts, setPosts] = useState<Posts[] | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const savePosts = async () => {
            const postData = await getPost();
            setPosts(postData);
            setLoading(false);
        }

        // run the function on mount 
        savePosts()

    }, []);

    if(loading) {
        return (
            <BlogsFallBack/>
        )
    }
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