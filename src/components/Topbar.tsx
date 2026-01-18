"use client";

import { RiPhoneFill, RiTimeFill, RiMapPinFill } from "react-icons/ri";
import Socials from "./Socials";
import { useLanguage } from "@/context/LanguageContext";

const Topbar = () => {
  const { t, dir } = useLanguage();
  return (
    <section className="hidden xl:flex py-3 bg-accent text-accent-foreground items-center" id="home">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-8">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <RiPhoneFill className="text-lg" />
              <p className="font-medium text-sm">{t.topbar.phone}</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <RiMapPinFill className="text-lg" />
              <p className="font-medium text-sm">{t.topbar.location}</p>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-2">
              <RiTimeFill className="text-lg" />
              <p className="font-medium text-sm">{t.topbar.hours}</p>
            </div>
          </div>

          <Socials 
            containerStyles="flex items-center gap-6" 
            iconStyles="text-accent-foreground hover:text-primary transition-all text-[18px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;