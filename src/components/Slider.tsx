"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SliderBtns from "./SliderBtns";
import { useLanguage } from "@/context/LanguageContext";

const Slider = () => {
  const { t, dir } = useLanguage();
  return (
    <Swiper
      className="bg-card shadow-xl w-full max-w-157.5 h-auto xl:h-50 rounded-lg border border-border"
      loop={true}
      navigation={false}
      // Ensure Swiper direction matches the app direction
      dir={dir}
      key={dir} // Re-mount Swiper when direction changes to fix navigation issues
      
    >
      {/* Slider 1 - Commercial/Corporate Focus */}
      {t.slider.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="px-12 md:pl-15 py-8 flex items-center gap-9 h-full">
            {/* Avatar */}
            <div className="relative hidden xl:flex w-22.5 h-22.5 min-w-22.5">
              <Image
                src={item.avatar}
                fill
                className="object-cover rounded-full border-2 border-accent"
                quality={100}
                alt={item.name}
              />
            </div>
            {/* Text */}
            <div className={`flex-1 xl:max-w-85 flex flex-col gap-2 ${dir === 'rtl' ? 'text-start' : 'text-left'}`}>
              <p className="text-card-foreground italic leading-relaxed">
                &quot;{item.quote}&quot;
              </p>
              <div>
                <p className="font-primary font-bold text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* Navigation Buttons */}
      <SliderBtns/>
    </Swiper>
  );
};

export default Slider;