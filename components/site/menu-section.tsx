import { Bean } from '@/components/decor'
import { Reveal, RevealHeading } from '@/components/motion/reveal'
import { Cta, Eyebrow } from '@/components/site/cta'
import { MenuCard } from '@/components/site/menu-card'
import { signatureItems } from '@/lib/site-config'

export function MenuSection() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative overflow-hidden bg-card py-24 md:py-32"
    >
      <Bean className="absolute right-[8%] top-20 hidden size-8 text-foreground/80 md:block" rotate={24} />
      <Bean className="absolute left-[4%] bottom-40 hidden size-6 text-terracotta/70 md:block" rotate={-30} delay={2} />

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow>Made with care</Eyebrow>
            </Reveal>
            <RevealHeading
              id="menu-heading"
              className="font-serif text-5xl leading-[1] tracking-tight text-balance md:text-7xl"
              lines={[
                <>A little something</>,
                <>
                  for every <em className="font-light text-terracotta">craving.</em>
                </>,
              ]}
            />
          </div>
          <Reveal delay={200} className="max-w-xs">
            <p className="leading-relaxed text-muted-foreground">
              Three things we would order on any given day. The rest of the menu
              changes a little with the seasons.
            </p>
          </Reveal>
        </div>

        <ul className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {signatureItems.map((item, i) => (
            <li key={item.name} className={i === 1 ? 'md:mt-16' : i === 2 ? 'md:mt-6' : ''}>
              <MenuCard item={item} index={i} />
            </li>
          ))}
        </ul>

        <Reveal className="flex justify-center">
          <Cta href="/menu" variant="outline">
            Explore The Full Menu
          </Cta>
        </Reveal>
      </div>
    </section>
  )
}
