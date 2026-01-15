import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-4 flex items-center md:justify-between justify-center">
        <Link href="/" className="flex items-center gap-3">
          {/* Replace with Al-Orf Logo if available, using placeholder for now */}
          <div className="rounded-full bg-accent w-12.5 h-12.5 flex items-center justify-center text-accent-foreground font-bold text-2xl">
            A
          </div>
          <div>
            <div className="text-lg font-bold text-primary tracking-wide">AL-ORF</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest">Law & Legal Consultation</div>
          </div>
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