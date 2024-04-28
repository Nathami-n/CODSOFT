import { Posts } from "@/types/postType"
import Image from 'next/image'
import Link from 'next/link'


const MiniCard = ( {
        post
    }: {
        post: Posts
    }
) => {
    

    return (
        <div
        style={{
            gridTemplateColumns: ".4fr 1fr",
        }}
        className="grid gap-4  mb-5 border-b-1 dark:border-border pb-6"
        >
            <div className="relative h-full">
               <Link href={`/blog/${post?.id}`}> <Image alt='blog image' src={`https://jjghnotanxljscpakcuz.supabase.co/storage/v1/object/public/nateLog/${post?.imageLink}`} className="object-cover" fill/></Link>
            </div>

            <div 
            className="
            flex
            flex-col
            justify-start
            ">
               <div 
               className=" flex items-center gap-1"
               >
                <span 
                className="text-[#687081]"
                >
                    By
                </span>
                <span className="text-[#022140] font-bold text-xs">
                {post?.author.name}
                 </span>
                <h1 className="text-[#687081] font-extrabold">
                    .
                </h1>
                <span
                className="text-[#687081] font-bold text-xs "
                >
                   {post?.createdAt.toUTCString().split(' ').slice(0, 4).join(" ")}
                </span>
               </div>
               <Link href={`/blog/${post?.id}`}><h3 className="text-md font-bold text-[#395fa0] mt-1 cursor-pointer">{post?.title}</h3></Link>
            </div>

        </div>
    )

}


export default MiniCard