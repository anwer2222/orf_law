"use client";

import { useSwiper } from "swiper/react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const SliderBtns = () => {
  const { dir } = useLanguage();
  const swiper = useSwiper();
  return (
    <div className={cn("w-max absolute bottom-4  flex gap-4 z-10", dir==="rtl"? "left-4 flex-row-reverse":"right-4")}>
      <button
        className="bg-accent text-accent-foreground text-[22px] w-10 h-10 flex justify-center items-center transition-all hover:bg-primary hover:text-primary-foreground rounded-sm"
        onClick={() => swiper.slidePrev()}
        aria-label="Previous slide"
      >
        <RiArrowLeftLine />
      </button>
      <button
        className="bg-accent text-accent-foreground text-[22px] w-10 h-10 flex justify-center items-center transition-all hover:bg-primary hover:text-primary-foreground rounded-sm"
        onClick={() => swiper.slideNext()}
        aria-label="Next slide"
      >
        <RiArrowRightLine />
      </button>
    </div>
  );
};

export default SliderBtns;