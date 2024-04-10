import { ButtonProps } from "@/types/buttonProps"



const Button: React.FC<ButtonProps> = ({
    title
}) => {
  return (
    <button 
    className="rounded-full p-2 bg-black w-[150px] text-sm text-white mt-2 hover:bg-rose-500 transition-all"
    >
        {title}
    </button>
  )
}

export default Button