import { Posts } from "@/types/postType";
import Image from "next/image";

export const PostCard = ({
    post
}: {
    post: Posts
}) => {

    return (
        <div>
            <div className="relative h-[50px] w-[50px]">
                <Image  alt ='post image'  className="object-cover rounded-lg" src={`https://jjghnotanxljscpakcuz.supabase.co/storage/v1/object/public/nateLog/${post?.imageLink}`} fill/>
            </div>
        </div>
    )
}