'use client'

import { type FormEvent, useId, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * Demonstration-only: validates on the client and shows a success state.
 * Nothing is sent anywhere — connect an email provider to make it real.
 */
export function NewsletterForm() {
  const id = useId()
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const value = email.trim()
    if (!value) return setError('Please add your email address.')
    if (!EMAIL_PATTERN.test(value)) return setError('That email doesn’t look quite right.')
    setError(null)
    setSubscribed(value)
    setEmail('')
  }

  if (subscribed) {
    return (
      <div role="status" className="animate-fade-slide flex flex-col items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-card text-foreground">
          <Check className="size-5" aria-hidden="true" />
        </span>
        <p className="font-serif text-2xl">Thank you — see you soon.</p>
        <p className="text-sm text-card/75">
          {"We'll"} write to {subscribed} only when something good comes out of the oven.
        </p>
        <p className="text-xs text-card/60">(Demo only — no email is actually sent.)</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 text-left">
      <label htmlFor={`${id}-email`} className="text-xs uppercase tracking-[0.22em] text-card/75">
        Letters from the café, now and then
      </label>
      <div
        className={cn(
          'flex items-center gap-2 rounded-full border bg-charcoal/40 p-1.5 pl-5 backdrop-blur-sm transition-colors focus-within:border-card',
          error ? 'border-rose' : 'border-card/40',
        )}
      >
        <input
          id={`${id}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError(null)
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="min-w-0 flex-1 bg-transparent py-2 text-base text-card placeholder:text-card/50 focus:outline-none"
        />
        <button
          type="submit"
          className="group flex min-h-11 items-center gap-2 rounded-full bg-card px-5 text-sm font-medium text-foreground transition-colors hover:bg-background"
        >
          Subscribe
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>
      <p id={`${id}-error`} role="alert" className="min-h-5 pl-5 text-sm text-rose">
        {error}
      </p>
    </form>
  )
}
