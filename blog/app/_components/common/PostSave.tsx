import CustomButton from "./CustomButton";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

const PostSave = ({
  pending
}:{
  pending: boolean
}) => {
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
      <Button
      disabled={pending}
      className="bg-black text-white rounded-full w-[100px] hover:bg-rose-500 transition"
      >
        <p> {pending ? "Loading..." : "Post"}</p>
      </Button>

    </div>
  )
}

export default PostSave