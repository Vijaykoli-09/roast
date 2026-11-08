import type { CSSProperties, ElementType, ReactNode } from 'react'
import { InView } from '@/components/motion/reveal-client'

export { ImageReveal, Reveal } from '@/components/motion/reveal-client'

type RevealHeadingProps = {
  as?: ElementType
  lines: ReactNode[]
  className?: string
  delay?: number
  stagger?: number
  id?: string
}

export function RevealHeading({
  as = 'h2',
  lines,
  className,
  delay = 0,
  stagger = 110,
  id,
}: RevealHeadingProps) {
  return (
    <InView as={as} id={id} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <span style={{ '--line-delay': `${delay + i * stagger}ms` } as CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </InView>
  )
}
