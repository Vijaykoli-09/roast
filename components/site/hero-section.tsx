import Image from 'next/image'
import { CoffeeSteam, Sprig } from '@/components/decor'
import { ImageReveal, Reveal, RevealHeading } from '@/components/motion/reveal'
import { Annotation, Cta, Eyebrow } from '@/components/site/cta'
import { siteConfig } from '@/lib/site-config'

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-8">
        <div className="relative z-10 flex flex-col gap-8 lg:col-span-6">
          <Reveal delay={100}>
            <Eyebrow>Your neighbourhood coffee house</Eyebrow>
          </Reveal>

          <RevealHeading
            as="h1"
            id="hero-heading"
            delay={200}
            stagger={140}
            className="font-serif text-6xl leading-[0.95] tracking-tight text-balance sm:text-7xl xl:text-8xl"
            lines={[
              <>Good days</>,
              <>
                begin <em className="font-light text-terracotta">with</em>
              </>,
              <>
                <em className="font-light">good</em> coffee.
              </>,
            ]}
          />

          <Reveal delay={700}>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              Slow mornings, freshly baked moments, and coffee worth taking your
              time for.
            </p>
          </Reveal>

          <Reveal delay={850} className="flex flex-wrap items-center gap-3">
            <Cta href="/#menu">Discover Our Menu</Cta>
            <Cta href="/#visit" variant="outline">
              Come Find Us
            </Cta>
          </Reveal>

          <Reveal delay={1000} variant="fade">
            <dl className="flex flex-wrap gap-x-10 gap-y-3 border-t border-foreground/15 pt-6 text-sm">
              <div className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Open daily
                </dt>
                <dd>{siteConfig.hours[0].time}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Find us
                </dt>
                <dd>{siteConfig.address.full}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="relative lg:col-span-6 lg:pl-10">
          <Sprig className="absolute -left-4 top-10 hidden h-48 w-24 -rotate-12 text-olive lg:block" />

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <ImageReveal
              delay={300}
              className="aspect-[4/5] w-full rounded-t-full rounded-b-2xl bg-beige shadow-[0_40px_80px_-40px_rgba(56,37,31,0.45)]"
            >
              <Image
                src="/images/hero-cappuccino.png"
                alt="A cappuccino with leaf latte art in a cream ceramic cup beside a butter croissant on a worn oak table, lit by window light"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 45vw, (min-width: 768px) 28rem, 90vw"
                className="object-cover"
              />
              <CoffeeSteam className="absolute left-[20%] top-[34%] h-[22%] w-[18%] drop-shadow-[0_0_6px_rgba(56,37,31,0.35)]" />
            </ImageReveal>

            <Reveal
              delay={1100}
              className="absolute -left-2 bottom-16 rotate-[-4deg] rounded-sm bg-card px-4 py-3 shadow-lg md:-left-10"
            >
              <Annotation>Freshly brewed, every morning.</Annotation>
            </Reveal>

            <Reveal
              delay={1250}
              className="absolute -bottom-12 right-2 max-w-[10rem] rotate-[3deg] text-right"
            >
              <Annotation className="text-foreground">Made with love & patience.</Annotation>
            </Reveal>

            <Reveal
              delay={1400}
              variant="fade"
              className="absolute -top-4 right-6 flex size-24 rotate-12 flex-col items-center justify-center rounded-full border border-dashed border-foreground/50 bg-background text-center md:right-0"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Café Rowan
              </span>
              <span className="font-serif text-sm italic">{siteConfig.established}</span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
