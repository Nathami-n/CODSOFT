
import { getPost } from "@/app/utils/getAllPosts"
import { Posts } from "@/types/postType"
import { useEffect, useState } from "react"
const Blogs = () => {
    const [post, setPost] = useState<Posts[] |null >(null);
    

    useEffect(()=>{
        const savePosts = async() => {
            const postData = await getPost();
            setPost(postData);
        }
        
    },[])
  return (
    <div>Blogs</div>
  )
}

export default Blogs