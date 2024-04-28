import { Posts } from "@/types/postType";
import Image from "next/image";
import Link from 'next/link';

const PostCard = ({
    post
}: {
    post: Posts
}) => {
    const text = post?.body as string;
    const strippedText = text?.replace(/<\/?p>/g,'');

    return (
        <div className="lg:grid lg:grid-cols-2 lg:gap-1">
            <div className="relative h-[200px] w-full">
                <Link href={`/blog/${post?.id}`}>
                <Image  alt ='post image'  className="object-cover rounded-lg" src={`https://jjghnotanxljscpakcuz.supabase.co/storage/v1/object/public/nateLog/${post?.imageLink}`} fill/>
                </Link>
            </div>
            <div 
            className="
            flex
            flex-col
            lg:justify-start
            justify-center
            dark:text-muted-foreground
            ">
               <div 
               className=" flex items-center gap-1"
               >
                <span 
                className="text-[#687081]"
                >
                    By
                </span>
                <span className=" dark:text-muted-foreground text-[#022140] font-bold">
                  {post?.author.name}
                 </span>
                <h1 className="text-[#687081] font-extrabold">
                    .
                </h1>
                <span
                className="text-[#687081] font-bold"
                >
                    {post?.createdAt.toUTCString().split(' ').slice(0, 4).join(" ")}
                </span>
               </div>
               <h1 className="text-[#687081]"> 2 minutes read</h1>
              <Link href={`/blog/${post?.id}`}> <h3 className="text-xl font-bold text-[#395fa0] mt-2 cursor-pointer dark:text-muted-foreground">{post?.title}</h3></Link>

               <p className="text-[#687081] text-[16px] line-clamp-3 dark:text-muted-foreground">{strippedText}</p>
            </div>
        </div>
    )
}

export default PostCard