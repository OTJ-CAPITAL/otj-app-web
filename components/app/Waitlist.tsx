'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp } from '@/lib/animations'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section
      id="waitlist"
      style={{
        backgroundColor: '#0D0D0D',
        padding: '120px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '560px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          {/* Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-space), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 52px)',
              lineHeight: 1.1,
              color: '#FFFFFF',
              letterSpacing: '-1px',
              marginBottom: '20px',
            }}
          >
            Get access first.
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#888888',
              marginBottom: '44px',
              maxWidth: '460px',
              margin: '0 auto 44px',
            }}
          >
            OTJ App launches Q3 2026. Early access reserved for founding investors and Fellowship members.
          </p>

          {/* Form or success */}
          {submitted ? (
            <div
              style={{
                backgroundColor: '#141414',
                border: '1px solid rgba(201, 168, 76, 0.3)',
                borderRadius: '4px',
                padding: '24px 32px',
                marginBottom: '16px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-space), sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  color: '#C9A84C',
                  marginBottom: '8px',
                }}
              >
                You&apos;re on the list.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '14px',
                  color: '#555555',
                }}
              >
                We&apos;ll reach out when access opens.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="waitlist-form"
              style={{ marginBottom: '16px' }}
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Enter your email"
                required
                className="waitlist-input"
                style={{
                  borderColor: focused ? '#C9A84C' : '#2A2A2A',
                }}
              />
              <button type="submit" className="waitlist-btn">
                Reserve →
              </button>
            </form>
          )}

          {/* Fine print */}
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '13px',
              color: '#555555',
            }}
          >
            No spam. One email when access opens.
          </p>
        </motion.div>
      </div>

      <style>{`
        .waitlist-form {
          display: flex;
          gap: 0;
          border-radius: 2px;
          overflow: hidden;
        }
        .waitlist-input {
          flex: 1;
          height: 48px;
          padding: 0 16px;
          background-color: transparent;
          border: 1px solid #2A2A2A;
          border-right: none;
          color: #FFFFFF;
          font-family: var(--font-inter), sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease;
          border-radius: 2px 0 0 2px;
        }
        .waitlist-btn {
          height: 48px;
          padding: 0 24px;
          background-color: #C9A84C;
          border: none;
          color: #080808;
          font-family: var(--font-inter), sans-serif;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          white-space: nowrap;
          transition: background-color 0.2s ease;
          border-radius: 0 2px 2px 0;
        }
        .waitlist-btn:hover { background-color: #E8C96A; }
        @media (max-width: 480px) {
          .waitlist-form { flex-direction: column !important; }
          .waitlist-input {
            border-right: 1px solid #2A2A2A !important;
            border-bottom: none !important;
            border-radius: 2px 2px 0 0 !important;
          }
          .waitlist-btn { border-radius: 0 0 2px 2px !important; }
        }
      `}</style>
    </section>
  )
}
