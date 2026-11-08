import Image from 'next/image'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { ImageReveal, Reveal, RevealHeading } from '@/components/motion/reveal'
import { Annotation, Cta, Eyebrow } from '@/components/site/cta'
import { siteConfig } from '@/lib/site-config'

export function VisitSection() {
  return (
    <section id="visit" aria-labelledby="visit-heading" className="py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col gap-10 lg:col-span-6">
          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow>Visit Café Rowan</Eyebrow>
            </Reveal>
            <RevealHeading
              id="visit-heading"
              className="font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl"
              lines={[
                <>Your table is</>,
                <>
                  <em className="font-light text-terracotta">waiting.</em>
                </>,
              ]}
            />
            <Reveal delay={200}>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                Come by for your morning coffee, stay for one more conversation.
              </p>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-foreground/15 bg-foreground/15 sm:grid-cols-2">
              <Detail icon={<MapPin className="size-4" />} label="Address">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </Detail>
              <Detail icon={<Clock className="size-4" />} label="Opening hours">
                {siteConfig.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </Detail>
              <Detail icon={<Phone className="size-4" />} label="Phone">
                <a href={siteConfig.phone.href} className="link-underline">
                  {siteConfig.phone.display}
                </a>
              </Detail>
              <Detail icon={<Mail className="size-4" />} label="Email">
                <a href={`mailto:${siteConfig.email}`} className="link-underline break-all">
                  {siteConfig.email}
                </a>
              </Detail>
            </dl>
          </Reveal>

          <Reveal delay={400} className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <Cta href={siteConfig.mapsUrl} external icon="up-right">
                Get Directions
              </Cta>
              <Cta href={siteConfig.phone.href} variant="outline">
                Call the Café
              </Cta>
            </div>
            {siteConfig.isDemo && (
              <p className="text-xs text-muted-foreground">
                Demonstration details for a fictional café. Address, phone and email are placeholders.
              </p>
            )}
          </Reveal>
        </div>

        <div className="relative lg:col-span-6">
          <ImageReveal className="aspect-[4/5] w-full rounded-t-full rounded-b-3xl">
            <Image
              src="/images/exterior.png"
              alt="A small café storefront with a dark wooden facade, a dusty rose striped awning and bistro tables on a cobblestone lane"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </ImageReveal>

          <Reveal
            delay={500}
            className="relative -mt-24 ml-auto w-[85%] max-w-sm rotate-[2deg] md:-mt-32 lg:absolute lg:-bottom-10 lg:-left-16 lg:mt-0 lg:ml-0"
          >
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border-8 border-card bg-card shadow-xl"
              aria-label="Open the demo location in Google Maps"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/demo-map.png"
                  alt=""
                  fill
                  sizes="24rem"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-foreground px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-background">
                  Demo map
                </span>
              </div>
              <div className="flex items-center justify-between px-2 pt-3">
                <Annotation className="text-lg">You are almost here.</Annotation>
                <MapPin className="size-4 text-terracotta" aria-hidden="true" />
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Detail({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2 bg-background p-5">
      <dt className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span aria-hidden="true" className="text-terracotta">
          {icon}
        </span>
        {label}
      </dt>
      <dd className="leading-relaxed">{children}</dd>
    </div>
  )
}
