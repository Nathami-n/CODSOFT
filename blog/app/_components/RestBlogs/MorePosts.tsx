'use client'
import {useState, useEffect} from 'react'
import {getPosts} from '@/app/utils/getAllPosts'
import { Posts } from '@/types/postType'
import MiniCard from './MiniCard'
const MorePosts = () => {
    const [restPost, setRestPosts] = useState<Posts[] | null>(null);

    useEffect(() => {
        const savePosts = async () => {
            const postData = await getPosts();
            setRestPosts(postData.slice(0,3));
        }

        // run the function on mount 
        savePosts()

    }, [])

    return (
        <div className="mt-10 max-lg:hidden">
            <h1 className="mb-3 text-[#022140] text-xl font-bold">More Posts</h1>
            <div>
                {restPost?.map((post, i)=> {
                    return(
                        <MiniCard key={i} post={post}/>
                    )
                })}
            </div>
        </div>

    )
}

export default MorePosts