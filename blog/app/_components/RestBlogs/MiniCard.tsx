import { Posts } from "@/types/postType"
import Image from 'next/image'


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
        className="grid gap-4  mb-5 border-b-2 pb-6"
        >
            <div className="relative h-full">
                <Image alt='blog image' src={`https://jjghnotanxljscpakcuz.supabase.co/storage/v1/object/public/nateLog/${post?.imageLink}`} className="object-cover" fill/>
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
                  Nate
                 </span>
                <h1 className="text-[#687081] font-extrabold">
                    .
                </h1>
                <span
                className="text-[#687081] font-bold text-xs "
                >
                    November 28, 2023
                </span>
               </div>
               <h3 className="text-md font-bold text-[#395fa0] mt-1 cursor-pointer">{post?.title}</h3>
            </div>

        </div>
    )

}


export default MiniCard