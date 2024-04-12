import { ButtonProps } from "@/types/buttonProps"



const Button: React.FC<ButtonProps> = ({
    title,
    handlePost,
    handleCancel,
  
}) => {
  return (
    <button 
    
    onClick={ title === "Post" ? handlePost : handleCancel}
    className={`rounded-full p-2 bg-black w-[150px] text-sm text-white mt-2 hover:bg-rose-500 transition-all ${title === "Cancel" ? "bg-blue-500 text-white" : ""}`}
    >
        {title}
    </button>
  )
}

export default Button