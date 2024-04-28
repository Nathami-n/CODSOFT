

const SearchBlog = ({
    cat
}: {
    cat: {
        title: string
    }
}) => {
    const business = await fetchPosts(cat.title);
    return (
        <div>Hello</div>
    )
};

export default SearchBlog