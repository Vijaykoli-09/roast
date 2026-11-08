'use client'

import { useEffect, useRef } from 'react'
import { Bean } from '@/components/decor'

const beans = [
  { left: '4%', phase: 0.08, speed: 0.34, size: 'size-6', color: 'text-terracotta/70', rotate: 24 },
  { left: '94%', phase: 0.28, speed: 0.48, size: 'size-8', color: 'text-olive/65', rotate: -32 },
  { left: '8%', phase: 0.52, speed: 0.41, size: 'size-5', color: 'text-espresso/60', rotate: 48 },
  { left: '91%', phase: 0.73, speed: 0.3, size: 'size-7', color: 'text-terracotta/65', rotate: -18 },
  { left: '3%', phase: 0.91, speed: 0.52, size: 'size-6', color: 'text-olive/60', rotate: 36 },
] as const

export function ScrollingBeans() {
  const beanRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const viewportHeight = window.innerHeight
      const cycle = viewportHeight + 112

      beans.forEach((bean, index) => {
        const element = beanRefs.current[index]
        if (!element) return

        const y = ((bean.phase * viewportHeight + window.scrollY * bean.speed) % cycle) - 56
        const edgeDistance = Math.min(y + 40, viewportHeight - y)
        const opacity = Math.max(0, Math.min(0.24, (edgeDistance / 90) * 0.24))
        const rotation = Math.sin(window.scrollY / 260 + index) * 14

        element.style.transform = `translate3d(0, ${y}px, 0) rotate(${rotation}deg)`
        element.style.opacity = String(opacity)
      })
    }

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="scroll-bean-layer pointer-events-none fixed inset-0 z-20 hidden overflow-hidden md:block"
    >
      {beans.map((bean, index) => (
        <div
          key={bean.left + bean.phase}
          ref={(element) => {
            beanRefs.current[index] = element
          }}
          className="absolute top-0 will-change-transform"
          style={{ left: bean.left, opacity: 0 }}
        >
          <Bean
            className={`${bean.size} ${bean.color}`}
            rotate={bean.rotate}
            delay={index * 1.15}
          />
        </div>
      ))}
    </div>
  )
}
