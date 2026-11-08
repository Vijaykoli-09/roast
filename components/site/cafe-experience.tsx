import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Parallax } from '@/components/motion/parallax'
import { Reveal, RevealHeading } from '@/components/motion/reveal'

export function CafeExperience() {
  return (
    <section
      id="space"
      aria-labelledby="space-heading"
      className="relative isolate flex min-h-[90svh] items-end overflow-hidden bg-charcoal text-card"
    >
      <Parallax speed={0.15} className="absolute inset-x-0 -inset-y-[15%] -z-10">
        <Image
          src="/images/cafe-interior.png"
          alt="Inside Café Rowan: wooden tables, bentwood chairs, a green velvet corner bench and golden sunlight through tall paned windows"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/10"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 pb-16 pt-40 md:flex-row md:items-end md:justify-between md:px-10 md:pb-24">
        <RevealHeading
          id="space-heading"
          className="font-serif text-5xl leading-[1] tracking-tight md:text-7xl lg:text-8xl"
          lines={[
            <>More than coffee.</>,
            <>
              A place to <em className="font-light text-rose">belong.</em>
            </>,
          ]}
        />
        <Reveal delay={250} className="flex max-w-sm flex-col gap-6">
          <p className="leading-relaxed text-card/85 text-pretty">
            Some places make you slow down without asking. A favourite corner, a
            familiar face, the smell of fresh coffee. We believe a café should
            feel a little like home.
          </p>
          <a
            href="/#details"
            className="group inline-flex items-center gap-3 self-start text-sm font-medium uppercase tracking-[0.22em]"
          >
            <span className="link-underline pb-1">Discover Our Space</span>
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
