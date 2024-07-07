import { Posts } from "@/types/postType"
import Image from 'next/image'
import Link from 'next/link'

export const BlogCard = ({
    post
}: {
    post: Posts
}
) => {
    const text = post?.body as string;
    const strippedText = text?.replace(/<\/?p>/g,'');
    return (
        <div 
        
        className="flex flex-col justify-center lg:grid lg:grid-cols-2 gap-6 mb-5 border-b pb-6 dark:border-border"
        >
            {/* Image */}
           <Link href={`/blog/${post?.id}`}>
           <div 
            className="relative h-[200px]"
            >
            <Image 
            className="
            h-full
            object-cover
            rounded-lg
            max-lg:ml-2
            "
             src={`https://jjghnotanxljscpakcuz.supabase.co/storage/v1/object/public/nateLog/${post?.imageLink}`}
              alt='post Image' 
              fill
              />
              <button className="absolute right-1 top-1 w-max p-1 rounded-lg bg-blue-500 text-white">{post?.category}</button>
            </div>
           </Link>

            {/* details */}
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

               <p className="text-[#687081] text-[16px] line-clamp-3 dark:text-muted-foreground">{text}</p>
            </div>

        </div>
    )
}

export default BlogCard