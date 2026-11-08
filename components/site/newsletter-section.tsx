import Image from 'next/image'
import { Parallax } from '@/components/motion/parallax'
import { Reveal, RevealHeading } from '@/components/motion/reveal'
import { Cta } from '@/components/site/cta'
import { NewsletterForm } from '@/components/site/newsletter-form'

export function NewsletterSection() {
  return (
    <section
      aria-labelledby="moments-heading"
      className="relative isolate overflow-hidden bg-charcoal py-28 text-card md:py-40"
    >
      <Parallax speed={0.12} className="absolute inset-x-0 -inset-y-[15%] -z-10">
        <Image
          src="/images/final-cta.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-charcoal/65" aria-hidden="true" />

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-5 text-center">
        <RevealHeading
          id="moments-heading"
          className="font-serif text-5xl leading-[1] tracking-tight md:text-7xl"
          lines={[
            <>Make room for</>,
            <>
              <em className="font-light text-rose">little moments.</em>
            </>,
          ]}
        />
        <Reveal delay={200}>
          <p className="max-w-md text-lg leading-relaxed text-card/85">
            Good coffee, good company, and a little time just for you.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <Cta href="/#visit" variant="light">
            Visit Café Rowan
          </Cta>
        </Reveal>
        <Reveal delay={400} className="w-full max-w-md pt-6">
          <NewsletterForm />
        </Reveal>
      </div>
    </section>
  )
}
