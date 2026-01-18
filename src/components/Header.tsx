"use client"
import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitch from './LanguageSwitch';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { t, lang } = useLanguage();
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-6 py-4 flex items-center md:justify-between justify-center">
        <Link href="/" className="flex items-center gap-3">
          {/* Replace with Al-Orf Logo if available, using placeholder for now */}
          <Image className="gradient-gold flex items-center justify-center text-primary-foreground font-semibold" src={lang==="en"? "/orf_logo_h.png":"/orf_logo_a.png"} alt="" height={300} width={300}/>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="text-foreground/80 hover:text-primary transition-colors">{t.header.about}</Link>
          <Link href="#services" className="text-foreground/80 hover:text-primary transition-colors">{t.header.services}</Link>
          <Link href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">{t.header.testimonials}</Link>
          <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors">{t.header.contact}</Link>
        </nav>
        {/* Language Switcher injected here */}
        <div className="w-px h-6 bg-border mx-2"></div>
          <LanguageSwitch />
      </div>
    </header>
  )
}