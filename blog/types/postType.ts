export type PostType = {
    title: string,
    category: string,
    postImage: File | null,
    content: string
}

export type Posts = {
    id: string;
    title: string | null;
    imageLink: string | null;
    body: string | null;
    category: string | null;
    authorId: string;
}