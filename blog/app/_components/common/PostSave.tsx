import Button from "./Button"

const PostSave = ( {
    handlePost
}:{
    handlePost: () => void
}) => {
    const handleCancel = () =>{};
    
  return (
   <div className=" fixed bottom-0 h-20 right-0 left-0 bg-white p-2 border-t flex justify-between items-center">
    <Button
    title='Cancel'
    handleCancel={handleCancel}
    />
    <Button
    title="Post"
    handlePost={handlePost}
    />

   </div>
  )
}

export default PostSave