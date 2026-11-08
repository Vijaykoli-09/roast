'use client'

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { cn } from '@/lib/utils'

function useInView<T extends Element>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

type RevealProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'up' | 'fade'
}

export function Reveal({
  as: Tag = 'div',
  children,
  className,
  delay = 0,
  variant = 'up',
}: RevealProps) {
  const { ref, visible } = useInView<HTMLElement>()
  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={cn(variant === 'up' ? 'reveal-up' : 'reveal-fade', className)}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}

type ImageRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      data-visible={visible}
      className={cn('reveal-mask relative overflow-hidden', className)}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      <div className="reveal-mask-clip absolute inset-0 overflow-hidden rounded-[inherit]">
        <div className="reveal-mask-inner absolute inset-0">{children}</div>
      </div>
    </div>
  )
}

type InViewProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  id?: string
}

export function InView({ as: Tag = 'div', children, className, id }: InViewProps) {
  const { ref, visible } = useInView<HTMLElement>()
  return (
    <Tag ref={ref} id={id} data-visible={visible} className={className}>
      {children}
    </Tag>
  )
}
