import Image from 'next/image'
import { ImageReveal, Reveal, RevealHeading } from '@/components/motion/reveal'
import { Annotation, Eyebrow } from '@/components/site/cta'
import { cn } from '@/lib/utils'

const tiles = [
  {
    src: '/images/gallery-croissants.png',
    alt: 'A tray of golden croissants fresh from the oven',
    caption: 'Fresh from the oven.',
    className: 'col-span-2 aspect-[4/3] md:col-span-5 md:row-span-2 md:aspect-auto',
    rounded: 'rounded-[2rem]',
  },
  {
    src: '/images/gallery-latteart.png',
    alt: 'A heart of latte art in a terracotta-glazed cup on a linen napkin',
    caption: 'Made slowly. Enjoyed slowly.',
    className: 'aspect-[3/4] md:col-span-3 md:aspect-[3/4]',
    rounded: 'rounded-t-full rounded-b-2xl',
  },
  {
    src: '/images/gallery-corner.png',
    alt: 'A quiet café corner with an armchair, marble table and trailing plants',
    caption: 'Your usual corner awaits.',
    className: 'aspect-[3/4] md:col-span-4 md:row-span-2 md:aspect-auto',
    rounded: 'rounded-2xl',
  },
  {
    src: '/images/gallery-dessert.png',
    alt: 'An almond and pear tart on a vintage floral ceramic plate',
    caption: 'One more cup?',
    className: 'col-span-2 aspect-[16/10] md:col-span-3 md:aspect-[4/3]',
    rounded: 'rounded-2xl',
  },
]

export function GallerySection() {
  return (
    <section id="details" aria-labelledby="details-heading" className="py-24 md:py-36">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow>The little details</Eyebrow>
            </Reveal>
            <RevealHeading
              id="details-heading"
              className="font-serif text-5xl leading-[1] tracking-tight text-balance md:text-7xl"
              lines={[
                <>Small things,</>,
                <>
                  <em className="font-light text-terracotta">noticed.</em>
                </>,
              ]}
            />
          </div>
          <Reveal delay={200} className="max-w-xs">
            <p className="leading-relaxed text-muted-foreground">
              Mismatched saucers, the first tray out of the oven, a chair that
              somehow becomes yours. This is what Rowan looks like on an ordinary
              Tuesday.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 md:auto-rows-[15rem] md:grid-cols-12 md:gap-5 lg:auto-rows-[17rem]">
          {tiles.map((tile, i) => (
            <figure key={tile.src} className={cn('group relative', tile.className)}>
              <ImageReveal delay={i * 120} className={cn('absolute inset-0', tile.rounded)}>
                <div className="absolute inset-0 transition-transform duration-1000 ease-[var(--ease-soft)] group-hover:scale-105">
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="(min-width: 768px) 40vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </ImageReveal>
              <figcaption className="absolute bottom-3 left-3 rotate-[-2deg] rounded-sm bg-card/95 px-3 py-1.5 shadow-sm transition-transform duration-500 group-hover:-translate-y-1 md:bottom-5 md:left-5">
                <Annotation className="text-lg md:text-xl">{tile.caption}</Annotation>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
