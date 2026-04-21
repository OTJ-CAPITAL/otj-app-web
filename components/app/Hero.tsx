'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const positions = [
  { symbol: 'BTC/USD', side: 'LONG', pnl: '+$8,420', positive: true },
  { symbol: 'ETH/USD', side: 'LONG', pnl: '+$3,105', positive: true },
  { symbol: 'EUR/NGN', side: 'SHORT', pnl: '-$640', positive: false },
]

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (inView) setStarted(true)
  }, [inView])

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh',
        backgroundColor: '#080808',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 24px 80px',
      }}
    >
      <div className="hero-grid" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Left: Text content */}
        <div>
          {/* Label */}
          <p className="section-label" style={{ marginBottom: '28px' }}>
            The Transparency Layer
          </p>

          {/* Headline */}
          <h1 className="hero-headline">
            See everything.<br />
            In real time.
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '20px',
              lineHeight: 1.7,
              color: '#888888',
              marginBottom: '44px',
              maxWidth: '440px',
            }}
          >
            Your capital. Always visible.<br />
            Every trade. Every signal.<br />
            Every position. Auditable.
          </p>

          {/* CTA Row */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="#waitlist" className="btn-primary">
              Join The Waitlist →
            </Link>
            <Link href="#dashboard" className="btn-ghost">
              See Demo Dashboard
            </Link>
          </div>
        </div>

        {/* Right: Mock Dashboard Card */}
        <div className="hero-dashboard-card">
          {/* Live indicator */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span className="live-dot" />
            <span
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                color: '#22C55E',
                letterSpacing: '1px',
              }}
            >
              LIVE
            </span>
          </div>

          {/* Stats rows */}
          <div style={{ marginBottom: '24px' }}>
            <StatRow
              label="Total AUM"
              value={
                started ? (
                  <CountUp
                    start={0}
                    end={2412000}
                    duration={2.2}
                    separator=","
                    prefix="$"
                    className="stat-value-gold"
                  />
                ) : (
                  <span className="stat-value-gold">$0</span>
                )
              }
            />
            <StatRow
              label="Monthly Return"
              value={<span className="stat-value-green">+12.4%</span>}
            />
            <StatRow
              label="Win Rate"
              value={<span className="stat-value-white">68.4%</span>}
            />
          </div>

          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: '#1E1E1E', marginBottom: '20px' }} />

          {/* Positions */}
          <div>
            <p className="table-label" style={{ marginBottom: '12px' }}>
              Open Positions
            </p>
            {positions.map((pos, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: i < positions.length - 1 ? '1px solid #1E1E1E' : 'none',
                }}
              >
                <span className="mono-text">{pos.symbol}</span>
                <span className={pos.side === 'LONG' ? 'tag-long' : 'tag-short'}>
                  {pos.side}
                </span>
                <span className={pos.positive ? 'stat-value-green' : 'stat-value-red'} style={{ fontSize: '13px' }}>
                  {pos.pnl}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .hero-headline {
          font-family: var(--font-space), sans-serif;
          font-weight: 700;
          font-size: clamp(44px, 6vw, 72px);
          line-height: 1.08;
          color: #FFFFFF;
          margin-bottom: 28px;
          letter-spacing: -1.5px;
        }
        .hero-dashboard-card {
          background-color: #141414;
          border: 1px solid #1E1E1E;
          border-radius: 4px;
          padding: 28px;
          position: relative;
        }
        .section-label {
          font-family: var(--font-inter), sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: #C9A84C;
          letter-spacing: 4px;
          text-transform: uppercase;
        }
        .btn-primary {
          font-family: var(--font-inter), sans-serif;
          font-weight: 500;
          font-size: 15px;
          color: #080808;
          background-color: #C9A84C;
          padding: 14px 28px;
          border-radius: 2px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background-color 0.2s ease;
        }
        .btn-primary:hover { background-color: #E8C96A; }
        .btn-ghost {
          font-family: var(--font-inter), sans-serif;
          font-weight: 500;
          font-size: 15px;
          color: #FFFFFF;
          background-color: transparent;
          border: 1px solid #2A2A2A;
          padding: 14px 28px;
          border-radius: 2px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: border-color 0.2s ease;
        }
        .btn-ghost:hover { border-color: #C9A84C; }
        .live-dot {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #22C55E;
          box-shadow: 0 0 6px #22C55E;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .stat-value-gold {
          font-family: var(--font-mono), monospace;
          font-size: 22px;
          font-weight: 600;
          color: #C9A84C;
        }
        .stat-value-green {
          font-family: var(--font-mono), monospace;
          font-size: 18px;
          font-weight: 600;
          color: #22C55E;
        }
        .stat-value-red {
          font-family: var(--font-mono), monospace;
          font-weight: 600;
          color: #EF4444;
        }
        .stat-value-white {
          font-family: var(--font-mono), monospace;
          font-size: 18px;
          font-weight: 600;
          color: #FFFFFF;
        }
        .table-label {
          font-family: var(--font-inter), sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: #555555;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .mono-text {
          font-family: var(--font-mono), monospace;
          font-size: 13px;
          font-weight: 500;
          color: #FFFFFF;
        }
        .tag-long {
          font-family: var(--font-inter), sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #22C55E;
          background-color: rgba(34,197,94,0.1);
          padding: 2px 8px;
          border-radius: 2px;
          letter-spacing: 1px;
        }
        .tag-short {
          font-family: var(--font-inter), sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #EF4444;
          background-color: rgba(239,68,68,0.1);
          padding: 2px 8px;
          border-radius: 2px;
          letter-spacing: 1px;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}

function StatRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid #1E1E1E',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '13px',
          color: '#555555',
        }}
      >
        {label}
      </span>
      {value}
    </div>
  )
}
