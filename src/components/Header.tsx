import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-4 flex items-center md:justify-between justify-center">
        <Link href="/" className="flex items-center gap-3">
          {/* Replace with Al-Orf Logo if available, using placeholder for now */}
          <Image className="rounded-full gradient-gold flex items-center justify-center text-primary-foreground font-semibold" src="/orf_logo_h.png" alt="" height={300} width={300}/>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="text-foreground/80 hover:text-accent transition-colors">About Firm</Link>
          <Link href="#services" className="text-foreground/80 hover:text-accent transition-colors">Expertise</Link>
          <Link href="#testimonials" className="text-foreground/80 hover:text-accent transition-colors">Testimonials</Link>
          <Link href="#contact" className="text-foreground/80 hover:text-accent transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  )
}