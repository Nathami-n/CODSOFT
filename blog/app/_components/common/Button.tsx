import { ButtonProps } from "@/types/buttonProps"


const Button: React.FC<ButtonProps> = ({
    title
}) => {
  return (
    <button 
    className="rounded-full p-2 bg-fuchsia-500 text-white text-sm"
    >
        {title}
    </button>
  )
}

export default Button