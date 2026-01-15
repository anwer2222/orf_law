"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SliderBtns from "./SliderBtns";

const Slider = () => {
  return (
    <Swiper
      className="bg-card shadow-xl w-full max-w-157.5 h-auto xl:h-50 rounded-lg border border-border"
      loop={true}
      navigation={false}
    >
      {/* Slider 1 - Commercial/Corporate Focus */}
      <SwiperSlide>
        <div className="px-12 md:pl-15 py-8 flex items-center gap-9 h-full">
          {/* Avatar */}
          <div className="relative hidden xl:flex w-22.5 h-22.5 min-w-22.5">
            <Image
              src="/assets/img/testimonials/avatar-1.jpg"
              fill
              className="object-cover rounded-full border-2 border-accent"
              quality={100}
              alt="Client Avatar"
            />
          </div>
          {/* Text */}
          <div className="flex-1 xl:max-w-85 flex flex-col gap-2">
            <p className="text-card-foreground italic leading-relaxed">
              &quot;Their grasp of international regulations and local Saudi law was impressive. They handled our corporate restructuring with absolute precision and confidentiality.&quot;
            </p>
            <div>
              <p className="font-primary font-bold text-foreground">Ahmed Al-Sayed</p>
              <p className="text-sm text-muted-foreground">CEO, Future Trade Co.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slider 2 - Litigation/Dispute Focus */}
      <SwiperSlide>
        <div className="px-12 md:pl-15 py-8 flex items-center gap-9 h-full">
          {/* Avatar */}
          <div className="relative hidden xl:flex w-22.5 h-22.5 min-w-22.5">
            <Image
              src="/assets/img/testimonials/avatar-2.jpg"
              fill
              className="object-cover rounded-full border-2 border-accent"
              quality={100}
              alt="Client Avatar"
            />
          </div>
          {/* Text */}
          <div className="flex-1 xl:max-w-85 flex flex-col gap-2">
            <p className="text-card-foreground italic leading-relaxed">
              &quot;I needed a firm that understood complex dispute resolution. Al-Orf's team fought for my rights with integrity and secured a favorable outcome against the odds.&quot;
            </p>
            <div>
              <p className="font-primary font-bold text-foreground">Sarah Al-Mehameed</p>
              <p className="text-sm text-muted-foreground">Private Client</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slider 3 - Consultation/General Focus */}
      <SwiperSlide>
        <div className="px-12 md:pl-15 py-8 flex items-center gap-9 h-full">
          {/* Avatar */}
          <div className="relative hidden xl:flex w-22.5 h-22.5 min-w-22.5">
            <Image
              src="/assets/img/testimonials/avatar-3.jpg"
              fill
              className="object-cover rounded-full border-2 border-accent"
              quality={100}
              alt="Client Avatar"
            />
          </div>
          {/* Text */}
          <div className="flex-1 xl:max-w-85 flex flex-col gap-2">
            <p className="text-card-foreground italic leading-relaxed">
              &quot;Professionalism at its finest in Madinah. From the initial consultation to the final agreement, their guidance was clear, honest, and legally sound.&quot;
            </p>
            <div>
              <p className="font-primary font-bold text-foreground">Mohammed Rashid</p>
              <p className="text-sm text-muted-foreground">Estate Planning Client</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Navigation Buttons */}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;