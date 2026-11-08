import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type CtaProps = {
  href: string
  children: ReactNode
  variant?: 'solid' | 'outline' | 'light' | 'ghost-light'
  external?: boolean
  icon?: 'right' | 'up-right'
  className?: string
} & Omit<ComponentProps<'a'>, 'href' | 'children'>

const variants = {
  solid: 'bg-primary text-primary-foreground hover:bg-charcoal',
  outline:
    'border border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground hover:text-background',
  light: 'bg-card text-foreground hover:bg-background',
  'ghost-light':
    'border border-card/50 text-card hover:border-card hover:bg-card hover:text-foreground',
}

export function Cta({
  href,
  children,
  variant = 'solid',
  external,
  icon = 'right',
  className,
  ...rest
}: CtaProps) {
  const Icon = icon === 'right' ? ArrowRight : ArrowUpRight
  const classes = cn(
    'group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring',
    variants[variant],
    className,
  )
  const content = (
    <>
      <span>{children}</span>
      <Icon
        className="size-4 transition-transform duration-500 ease-[var(--ease-soft)] group-hover:translate-x-1"
        aria-hidden="true"
      />
    </>
  )

  if (external || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  )
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground',
        className,
      )}
    >
      <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
      {children}
    </p>
  )
}

export function Annotation({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span className={cn('font-hand text-xl leading-tight text-terracotta', className)}>
      {children}
    </span>
  )
}
