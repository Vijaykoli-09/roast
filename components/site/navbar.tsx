'use client'

import Link from 'next/link'
import { type CSSProperties, useEffect, useState } from 'react'
import { navLinks, siteConfig } from '@/lib/site-config'
import { RowanMark } from '@/components/decor'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500',
        scrolled && !open
          ? 'border-b border-foreground/10 bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent',
        open && 'bg-background',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:px-10"
      >
        <Link
          href="/#top"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <RowanMark className="size-8 text-foreground transition-transform duration-1000 ease-[var(--ease-soft)] group-hover:rotate-[24deg]" />
          <span className="font-serif text-2xl leading-none tracking-tight">
            Café <em className="font-normal">Rowan</em>
          </span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline pb-1 text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/#visit"
            className="group hidden size-16 flex-col items-center justify-center rounded-full border border-foreground/40 text-center text-[11px] font-medium uppercase leading-tight tracking-[0.18em] transition-colors duration-500 hover:bg-foreground hover:text-background sm:flex"
          >
            <span>Visit</span>
            <span>Us</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative flex size-12 items-center justify-center rounded-full border border-foreground/20 lg:hidden"
          >
            <span
              className={cn(
                'absolute h-px w-5 bg-foreground transition-transform duration-500 ease-[var(--ease-soft)]',
                open ? 'rotate-45' : '-translate-y-1',
              )}
            />
            <span
              className={cn(
                'absolute h-px w-5 bg-foreground transition-transform duration-500 ease-[var(--ease-soft)]',
                open ? '-rotate-45' : 'translate-y-1',
              )}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-5rem)] overflow-y-auto bg-background px-5 pb-10 lg:hidden"
      >
        <ul className="flex flex-col border-t border-foreground/10 pt-6">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="animate-fade-slide border-b border-foreground/10"
              style={{ animationDelay: `${80 + i * 70}ms` } as CSSProperties}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-5 font-serif text-4xl"
              >
                {link.label}
                <span className="font-hand text-lg text-terracotta" aria-hidden="true">
                  {i === 2 ? 'hungry?' : ''}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="animate-fade-slide mt-10 flex flex-col gap-2 text-sm text-muted-foreground [animation-delay:500ms]">
          <p>{siteConfig.address.full}</p>
          <p>{siteConfig.hours[0].time}, every day</p>
          <a href={siteConfig.phone.href} className="text-foreground underline underline-offset-4">
            {siteConfig.phone.display}
          </a>
        </div>
      </div>
    </header>
  )
}
