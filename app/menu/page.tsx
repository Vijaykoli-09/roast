import type { Metadata } from 'next'
import { Sprig } from '@/components/decor'
import { RevealHeading, Reveal } from '@/components/motion/reveal'
import { Cta, Eyebrow } from '@/components/site/cta'
import { Footer } from '@/components/site/footer'
import { FullMenu } from '@/components/site/full-menu'
import { Navbar } from '@/components/site/navbar'

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Coffee, tea, fresh bakes and an unhurried brunch at Café Rowan. Illustrative portfolio prices.',
}

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-32 md:pt-40">
        <Sprig className="absolute right-[6%] top-28 hidden h-56 w-28 rotate-12 text-olive md:block" />
        <div className="mx-auto flex max-w-5xl flex-col gap-14 px-5 pb-24 md:px-10 md:pb-32">
          <header className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow>The menu</Eyebrow>
            </Reveal>
            <RevealHeading
              as="h1"
              className="font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl"
              lines={[
                <>Take your</>,
                <>
                  <em className="font-light text-terracotta">time.</em>
                </>,
              ]}
            />
            <Reveal delay={200}>
              <p className="max-w-md leading-relaxed text-muted-foreground">
                Everything is made in-house, and some things run out by noon. Ask
                at the counter about oat, almond and decaf options.
              </p>
            </Reveal>
          </header>

          <FullMenu />

          <Reveal className="flex flex-col items-start gap-6 rounded-3xl bg-card p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <p className="font-serif text-3xl leading-tight text-balance">
              Hungry yet? <em className="font-light">Your table is waiting.</em>
            </p>
            <Cta href="/#visit">Come Find Us</Cta>
          </Reveal>
          <p className="text-xs text-muted-foreground">
            Illustrative prices for a fictional café — portfolio concept.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
