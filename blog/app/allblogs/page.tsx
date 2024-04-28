import PostCard  from "@/app/_components/common/PostCard";
import prisma from "../utils/prismaClient";

const fetchPosts = async (category: string) => {
    const posts = await prisma.post.findMany({
        where: {
            category: category,
            complete: true
        },
        select: {
            id: true,
            title: true,
            imageLink: true,
            body: true,
            category: true,
            authorId: true,
            createdAt: true,
            author: true
        }
    });

    return posts;
};

const AllBlogs = async () => {

    const business = await fetchPosts('business');
    const Science = await fetchPosts("science");
    const Network = await fetchPosts("network");
    const Technology = await fetchPosts("technology");
    return (
        <div className="flex flex-col gap-8 max-w-5xl mx-auto px-3">
            <div>
                <h1 className="mb-2">Business</h1>
                <div className="flex gap-2 items-center">
                    {business.map((post) => {
                        return <PostCard key={post.id} post={post} />
                    })}
                </div>
            </div>
            <div>
                <h1 className="mb-2">Science</h1>
                <div className="flex gap-2 items-center">
                    {Science.map((post) => {
                        return <PostCard key={post.id} post={post} />
                    })}
                </div>
            </div>
            <div>
                <h1 className="mb-2">Network</h1>
                <div className="flex gap-2 items-center flex-wrap">
                    {Network.map((post) => {
                        return <PostCard key={post.id} post={post} />
                    })}
                </div>
            </div>
            <div>
                <h1 className="mb-2" >Technology</h1>
                <div className=" flex gap-3 flex-wrap">
                    {Technology.map((post) => {
                        return <PostCard key={post.id} post={post} />
                    })}
                </div>
            </div>
        
        </div>
    )
};


export default AllBlogs;