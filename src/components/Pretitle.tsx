import { cn } from "@/lib/utils";

type Prop= {
    text:string, 
    lang: "ar" | "en",
    center?:boolean
}

const Pretitle = ({text, lang ,center}:Prop) => {
  return (
    <div className={`flex items-center gap-3 mb-4 ${center && "justify-center"}`}>
      <div className="w-2 h-2 bg-chart-1"></div>
        <p className={cn("font-primary",lang==="en"?"tracking-[3.2px] uppercase":"" )}>
        {text}
        </p>
        <div className="w-2 h-2 bg-chart-1"></div>

      
    </div>
    )
}

export default Pretitle;