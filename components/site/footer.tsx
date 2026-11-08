import Link from 'next/link'
import { Camera as Instagram } from 'lucide-react'
import { RowanMark, Sprig } from '@/components/decor'
import { Reveal } from '@/components/motion/reveal'
import { navLinks, siteConfig } from '@/lib/site-config'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-card">
      <Sprig className="absolute -right-6 bottom-10 h-64 w-32 rotate-[18deg] text-card/15" />
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-5 pb-10 pt-20 md:px-10 md:pt-28">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <div className="flex flex-col gap-5 md:col-span-5">
            <Link href="/#top" className="flex items-center gap-3 self-start">
              <RowanMark className="size-10" />
              <span className="font-serif text-4xl tracking-tight">
                Café <em className="font-light">Rowan</em>
              </span>
            </Link>
            <p className="font-hand text-2xl text-rose">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <h2 className="mb-4 text-xs uppercase tracking-[0.22em] text-card/70">Explore</h2>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-underline text-card/90">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/menu" className="link-underline text-card/90">
                  Full Menu
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-4 md:col-span-3">
            <h2 className="text-xs uppercase tracking-[0.22em] text-card/70">Visit</h2>
            <address className="not-italic leading-relaxed text-card/90">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </address>
            <ul className="leading-relaxed text-card/90">
              {siteConfig.hours.map((h) => (
                <li key={h.days}>
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 md:col-span-2">
            <h2 className="text-xs uppercase tracking-[0.22em] text-card/70">Say hello</h2>
            <a href={siteConfig.phone.href} className="link-underline self-start text-card/90">
              {siteConfig.phone.display}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="link-underline self-start break-all text-card/90">
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 self-start text-card/90 hover:text-card"
            >
              <Instagram className="size-4" aria-hidden="true" />
              <span className="link-underline">{siteConfig.social.instagram.handle}</span>
            </a>
          </div>
        </Reveal>

        <p
          className="font-serif text-[22vw] leading-[0.8] tracking-tighter text-card/10 md:text-[15vw]"
          aria-hidden="true"
        >
          Rowan<em className="font-light">.</em>
        </p>

        <div className="flex flex-col gap-2 border-t border-card/15 pt-6 text-xs text-card/70 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. A fictional café — portfolio concept.
          </p>
          <p>Made slowly, enjoyed slowly.</p>
        </div>
      </div>
    </footer>
  )
}
