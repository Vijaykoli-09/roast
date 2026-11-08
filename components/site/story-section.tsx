import Image from 'next/image'
import { Sprig } from '@/components/decor'
import { ImageReveal, Reveal, RevealHeading } from '@/components/motion/reveal'
import { Annotation, Cta, Eyebrow } from '@/components/site/cta'

export function StorySection() {
  return (
    <section id="story" aria-labelledby="story-heading" className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-5">
          <ImageReveal className="aspect-[3/4] w-full max-w-md rounded-[2rem]">
            <Image
              src="/images/story-barista.png"
              alt="A barista pouring steamed milk into a ceramic cup to make latte art at a wooden counter"
              fill
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="object-cover"
            />
          </ImageReveal>
          <ImageReveal
            delay={250}
            className="absolute -bottom-10 right-0 aspect-square w-36 rounded-full border-8 border-background md:w-48 lg:-right-10"
          >
            <Image
              src="/images/gallery-croissants.png"
              alt="Freshly baked croissants on parchment paper"
              fill
              sizes="12rem"
              className="object-cover"
            />
          </ImageReveal>
        </div>

        <div className="relative flex flex-col gap-8 lg:col-span-6 lg:col-start-7">
          <Sprig className="absolute -top-16 right-0 h-36 w-16 rotate-12 text-olive" />
          <Reveal>
            <Eyebrow>A story brewed with love</Eyebrow>
          </Reveal>
          <RevealHeading
            id="story-heading"
            className="font-serif text-5xl leading-[1.02] tracking-tight text-balance md:text-6xl"
            lines={[
              <>
                Rooted in <em className="font-light text-terracotta">simplicity.</em>
              </>,
              <>Made for togetherness.</>,
            ]}
          />
          <Reveal delay={200} className="flex max-w-lg flex-col gap-5 leading-relaxed text-muted-foreground">
            <p className="font-serif text-2xl leading-snug text-foreground">
              Café Rowan began with a simple thought: the best moments in life are
              often the smallest ones.
            </p>
            <p>
              A perfectly brewed cup, a warm pastry, an unexpected conversation, or
              a quiet moment to yourself.
            </p>
            <p>We created a space where these moments could happen every day.</p>
          </Reveal>
          <Reveal delay={300} className="flex flex-wrap items-center gap-6">
            <Cta href="/#details" variant="outline">
              A Little More About Us
            </Cta>
            <Annotation className="-rotate-3">— the Rowan family</Annotation>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
