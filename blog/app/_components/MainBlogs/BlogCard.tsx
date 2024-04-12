import { Posts } from "@/types/postType"
import Image from 'next/image'

export const BlogCard = ({
    post
}: {
    post: Posts
}
) => {
    const text = post?.body as string;
    const strippedText = text.replace(/<\/?p>/g,'');
    return (
        <div 
        style={{
            gridTemplateColumns: "1fr 1fr",
        }}
        className="grid gap-6 mb-5 border-b-2 pb-6"
        >
            {/* Image */}
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
            </div>

            {/* details */}
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
                <span className="text-[#022140] font-bold">
                  Nate
                 </span>
                <h1 className="text-[#687081] font-extrabold">
                    .
                </h1>
                <span
                className="text-[#687081] font-bold"
                >
                    November 28, 2023
                </span>
               </div>
               <h1 className="text-[#687081]"> 2 minutes read</h1>
               <h3 className="text-xl font-bold text-[#395fa0] mt-2 cursor-pointer">{post?.title}</h3>

               <p className="text-[#687081] text-[16px] line-clamp-3">{strippedText}</p>
            </div>

        </div>
    )
}

export default BlogCard