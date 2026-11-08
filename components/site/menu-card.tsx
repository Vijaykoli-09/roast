import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CoffeeSteam } from '@/components/decor'
import { ImageReveal, Reveal } from '@/components/motion/reveal'
import { Annotation } from '@/components/site/cta'
import { formatPrice, type SignatureItem } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const tones: Record<SignatureItem['tone'], string> = {
  rose: 'bg-rose/35',
  beige: 'bg-beige/60',
  olive: 'bg-olive/25',
}

const shapes = ['rounded-t-full', 'rounded-[2.5rem]', 'rounded-t-[6rem] rounded-b-[1.25rem]']

export function MenuCard({ item, index }: { item: SignatureItem; index: number }) {
  return (
    <Reveal delay={index * 140}>
      <article
        className={cn(
          'group relative flex flex-col gap-6 rounded-3xl p-4 pb-7 transition-transform duration-700 ease-[var(--ease-soft)] hover:-translate-y-2',
          tones[item.tone],
        )}
      >
        <ImageReveal
          delay={index * 140 + 150}
          className={cn('aspect-[4/5] w-full', shapes[index % shapes.length])}
        >
          <div className="absolute inset-0 transition-transform duration-1000 ease-[var(--ease-soft)] group-hover:scale-105">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 768px) 30vw, 90vw"
              className="object-cover"
            />
          </div>
          {item.tone === 'rose' && (
            <CoffeeSteam className="absolute left-[36%] top-[6%] h-[24%] w-[26%]" />
          )}
        </ImageReveal>

        <div className="flex flex-col gap-3 px-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif text-3xl leading-[1.05] tracking-tight text-balance">
              {item.name.replace('The ', '')}
            </h3>
            <p className="pt-1 font-serif text-lg italic">{formatPrice(item.price)}</p>
          </div>
          <Annotation className="-rotate-2 self-start">{item.note}</Annotation>
          <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          <Link
            href="/menu"
            className="mt-2 inline-flex items-center gap-2 self-start text-xs font-medium uppercase tracking-[0.22em] after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-none"
          >
            <span className="link-underline pb-0.5">See on menu</span>
            <span className="flex size-8 items-center justify-center rounded-full border border-foreground/30 transition-all duration-500 group-hover:rotate-45 group-hover:bg-foreground group-hover:text-background">
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
            <span className="sr-only">: {item.name}</span>
          </Link>
        </div>
      </article>
    </Reveal>
  )
}
