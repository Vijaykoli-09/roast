import { Reveal, RevealHeading } from '@/components/motion/reveal'
import { Eyebrow } from '@/components/site/cta'
import { testimonials } from '@/lib/site-config'

export function Testimonials() {
  return (
    <section aria-labelledby="love-heading" className="bg-rose/25 py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <Eyebrow>Customer love</Eyebrow>
          </Reveal>
          <RevealHeading
            id="love-heading"
            className="font-serif text-5xl leading-[1] tracking-tight md:text-6xl"
            lines={[
              <>
                Kind words, <em className="font-light text-terracotta">warm cups.</em>
              </>,
            ]}
          />
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 140}>
              <figure className="flex h-full flex-col justify-between gap-10 rounded-3xl bg-card p-8 md:p-10">
                <blockquote className="flex flex-col gap-4">
                  <span
                    className="font-serif text-6xl leading-none text-rose"
                    aria-hidden="true"
                  >
                    {'\u201C'}
                  </span>
                  <p className="font-serif text-2xl leading-snug text-pretty">{t.quote}</p>
                </blockquote>
                <figcaption className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {t.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <p className="text-center text-xs text-muted-foreground">
          Illustrative testimonials written for this portfolio concept — not real customer reviews.
        </p>
      </div>
    </section>
  )
}
