import Image from 'next/image'
import { Bean, DeckleEdge } from '@/components/decor'
import { ImageReveal, Reveal, RevealHeading } from '@/components/motion/reveal'
import { Eyebrow } from '@/components/site/cta'

const steps = [
  {
    title: 'The Beans',
    body: 'Carefully selected beans with character and depth.',
    image: '/images/process-beans.png',
    alt: 'Freshly roasted coffee beans spilling from a linen sack and a brass scoop',
  },
  {
    title: 'The Brew',
    body: 'Prepared with patience, precision, and care.',
    image: '/images/process-brew.png',
    alt: 'Espresso pouring from a vintage portafilter into a small cream cup',
  },
  {
    title: 'The Moment',
    body: 'Served fresh, ready to make your day a little better.',
    image: '/images/process-moment.png',
    alt: 'Two hands holding a warm cup of coffee beside an open book by a sunny window',
  },
]

export function CoffeeProcess() {
  return (
    <section aria-labelledby="ritual-heading" className="relative text-card">
      <DeckleEdge className="text-foreground" />
      <div className="relative overflow-hidden bg-foreground py-24 md:py-32">
        <Bean className="absolute right-[12%] top-24 size-7 text-terracotta" rotate={40} />
        <Bean className="absolute left-[46%] top-12 hidden size-5 text-beige/60 md:block" rotate={-20} delay={3} />

        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-5 md:px-10">
          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow className="text-beige">The art of coffee</Eyebrow>
            </Reveal>
            <RevealHeading
              id="ritual-heading"
              className="font-serif text-5xl leading-[1] tracking-tight text-balance md:text-7xl"
              lines={[
                <>Every cup has</>,
                <>
                  its own little <em className="font-light text-rose">ritual.</em>
                </>,
              ]}
            />
          </div>

          <ol className="grid gap-12 md:grid-cols-3 md:gap-6 lg:gap-10">
            {steps.map((step, i) => (
              <li key={step.title} className="group flex flex-col gap-6">
                <ImageReveal
                  delay={i * 180}
                  className="aspect-[3/4] w-full rounded-t-full"
                >
                  <div className="absolute inset-0 transition-transform duration-1000 ease-[var(--ease-soft)] group-hover:scale-105">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 768px) 30vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </ImageReveal>
                <Reveal delay={i * 180 + 200} className="flex items-start gap-5">
                  <span className="font-serif text-lg italic text-rose" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <div className="flex flex-col gap-2 border-l border-card/20 pl-5">
                    <h3 className="font-serif text-3xl tracking-tight">{step.title}</h3>
                    <p className="max-w-xs leading-relaxed text-card/75">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <DeckleEdge flip className="text-foreground" />
    </section>
  )
}
