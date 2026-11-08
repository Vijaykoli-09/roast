'use client'

import { type CSSProperties, type KeyboardEvent, useRef, useState } from 'react'
import { Annotation } from '@/components/site/cta'
import { formatPrice, fullMenu } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function FullMenu() {
  const [activeId, setActiveId] = useState(fullMenu[0].id)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const active = fullMenu.find((c) => c.id === activeId) ?? fullMenu[0]

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const index = fullMenu.findIndex((c) => c.id === activeId)
    let next = index
    if (e.key === 'ArrowRight') next = (index + 1) % fullMenu.length
    else if (e.key === 'ArrowLeft') next = (index - 1 + fullMenu.length) % fullMenu.length
    else return
    e.preventDefault()
    setActiveId(fullMenu[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="flex flex-col gap-10">
      <div
        role="tablist"
        aria-label="Menu categories"
        onKeyDown={onKeyDown}
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0"
      >
        {fullMenu.map((category, i) => {
          const selected = category.id === activeId
          return (
            <button
              key={category.id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={selected}
              aria-controls={`panel-${category.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(category.id)}
              className={cn(
                'shrink-0 rounded-full border px-5 py-2.5 text-sm transition-colors duration-500',
                selected
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-foreground/25 hover:border-foreground',
              )}
            >
              {category.label}
            </button>
          )
        })}
      </div>

      <section
        key={active.id}
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="flex flex-col gap-6"
      >
        <div className="animate-fade-slide flex items-baseline justify-between gap-4 border-b border-foreground/20 pb-4">
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">{active.label}</h2>
          <p className="font-serif italic text-muted-foreground">{active.intro}</p>
        </div>
        <ul className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {active.items.map((item, i) => (
            <li
              key={item.name}
              className="animate-fade-slide flex flex-col gap-1.5"
              style={{ animationDelay: `${i * 60}ms` } as CSSProperties}
            >
              <div className="flex items-baseline gap-3">
                <h3 className="font-serif text-2xl">{item.name}</h3>
                <span
                  className="mb-1.5 flex-1 border-b border-dotted border-foreground/40"
                  aria-hidden="true"
                />
                <span className="font-serif text-lg italic">{formatPrice(item.price)}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              {item.note && <Annotation className="-rotate-1 self-start text-lg">{item.note}</Annotation>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
