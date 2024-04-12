export type PostType = {
    title: string,
    category: string,
    postImage: File | null,
    content: string
}

export type Posts = {
        title: string,
        body: string,
        id: string,
        authorId: string,
        category: string,
        imageLink: string,
}