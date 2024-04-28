import CustomButton from "./CustomButton"
import { useRouter } from 'next/navigation'

const PostSave = () => {
  const router = useRouter();
  const handleCancel = () => {
    router.push('/');
  };

  return (
    <div className=" fixed bottom-0 h-20 right-0 left-0 bg-white p-2 border-t flex justify-between items-center">
      <CustomButton
        title='Cancel'
        handleCancel={handleCancel}

      />
      <CustomButton
        title="Post"
      />

    </div>
  )
}

export default PostSave