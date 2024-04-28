import { ButtonProps } from "@/types/buttonProps"



const  CustomButton: React.FC<ButtonProps> = ({
    title,
    handleCancel,
    pending
  
}) => {
  return (
    <button 
    type ={ title === 'Post' ? "submit": "button"}
    disabled={pending}
    onClick ={ handleCancel && handleCancel}
    className={`rounded-full p-2 bg-black w-[150px] text-sm text-white mt-2 hover:bg-rose-500 transition-all ${title === "Cancel" ? "bg-blue-500 text-white" : ""}`}
    >
        {pending ? (
          <p>Please wait</p>
        ): (
          <p>{title}</p>
        )}
    </button>
  )
}

export default CustomButton