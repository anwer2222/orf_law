"use client";

import { useLanguage } from "@/context/LanguageContext";
import { RiGlobalLine } from "react-icons/ri";

const LanguageSwitch = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 hover:bg-accent hover:text-primary transition-all text-sm font-medium"
      aria-label="Switch Language"
    >
      <RiGlobalLine className="text-lg" />
      <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
    </button>
  );
};

export default LanguageSwitch;