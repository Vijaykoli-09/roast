import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

export function CoffeeSteam({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 120"
      fill="none"
      aria-hidden="true"
      className={cn('pointer-events-none', className)}
    >
      <defs>
        <filter id="steam-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
      </defs>
      <g
        stroke="var(--card)"
        strokeWidth="2.4"
        strokeLinecap="round"
        filter="url(#steam-blur)"
      >
        <path
          className="steam-path"
          d="M18 112 C 8 92, 28 80, 18 60 S 12 30, 22 10"
          style={{ animationDelay: '0s' }}
        />
        <path
          className="steam-path"
          d="M32 114 C 42 94, 22 82, 32 62 S 40 34, 30 14"
          style={{ animationDelay: '1.8s' }}
        />
        <path
          className="steam-path"
          d="M44 110 C 36 92, 52 80, 44 64 S 38 40, 46 22"
          style={{ animationDelay: '3.4s' }}
        />
      </g>
    </svg>
  )
}

export function Sprig({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 160"
      fill="none"
      aria-hidden="true"
      className={cn('pointer-events-none', className)}
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    >
      <path d="M40 158 C 42 120, 36 80, 44 4" />
      {[
        [40, 132, -38],
        [41, 110, 36],
        [40, 88, -34],
        [42, 66, 32],
        [42, 44, -30],
        [44, 24, 28],
      ].map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x + (r > 0 ? 11 : -11)}
          cy={y}
          rx="12"
          ry="4.5"
          transform={`rotate(${r} ${x} ${y})`}
        />
      ))}
    </svg>
  )
}

export function Bean({
  className,
  rotate = 0,
  delay = 0,
}: {
  className?: string
  rotate?: number
  delay?: number
}) {
  return (
    <svg
      viewBox="0 0 40 52"
      aria-hidden="true"
      className={cn('bean-float pointer-events-none', className)}
      style={{ '--r': `${rotate}deg`, animationDelay: `${delay}s` } as CSSProperties}
    >
      <ellipse cx="20" cy="26" rx="17" ry="23" fill="currentColor" />
      <path
        d="M20 5 C 12 18, 28 32, 20 47"
        stroke="var(--background)"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  )
}

export function RowanMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn(className)}
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    >
      <circle cx="16" cy="16" r="15" />
      <path d="M16 27 C 16 20, 15 14, 17 7" />
      <ellipse cx="11.5" cy="17" rx="4.2" ry="1.8" transform="rotate(-35 16 17)" />
      <ellipse cx="20.5" cy="13" rx="4.2" ry="1.8" transform="rotate(35 16 13)" />
      <circle cx="17" cy="6.5" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="13.6" cy="8.4" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="20.2" cy="8.2" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Organic, slightly irregular paper edge used between sections. */
export function DeckleEdge({
  className,
  flip = false,
}: {
  className?: string
  flip?: boolean
}) {
  return (
    <svg
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn('block h-5 w-full md:h-8', flip && 'rotate-180', className)}
    >
      <path
        fill="currentColor"
        d="M0 40 V18 C 60 22, 110 10, 180 16 S 300 26, 380 14 S 520 6, 600 18 S 760 28, 840 15 S 980 4, 1060 16 S 1200 26, 1280 13 S 1400 8, 1440 18 V40 Z"
      />
    </svg>
  )
}
