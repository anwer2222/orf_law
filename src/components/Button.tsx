import { cn } from "@/lib/utils";
import { RiArrowRightUpLine,RiArrowLeftUpLine } from "react-icons/ri"

const Button = ({text,dir}:{text:string,dir?: "rtl" | "ltr"}) => {
  return (
    <button className="w-52.5 h-13.5 py-1.25 pl-2.5 flex items-center justify-between min-w-50 group bg-accent">
      <div className={cn("flex-1 text-center font-primary font-bold text-primary text-sm",dir==="ltr"?"tracking-[1.2px] uppercase":"")}>
        {text}
      </div>
      <div className="w-11 h-11 bg-primary flex items-center justify-center mr-1">
        { 
           dir==="rtl"?
           <RiArrowLeftUpLine className="text-white text-xl group-hover:-rotate-45 transition-all duration-200"/>
           :
           <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200"/>
        }
      </div>
    </button>
  )
}

export default Button;