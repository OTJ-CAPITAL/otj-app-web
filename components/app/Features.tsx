'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LineChart, BarChart2, FileText, Wallet, Globe, Zap } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

const features = [
  {
    number: '01',
    icon: LineChart,
    title: 'Live Portfolio',
    description:
      'Real-time view of every active position. Entry points, current value, P&L. Updated on every execution.',
  },
  {
    number: '02',
    icon: BarChart2,
    title: 'Performance Reports',
    description:
      'Daily, weekly, monthly, all-time. Risk-adjusted returns. Drawdown analysis. Sharpe ratio.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Trade Log',
    description:
      'Complete auditable record. Timestamp. Entry. Exit. Size. AI rationale for every decision.',
  },
  {
    number: '04',
    icon: Wallet,
    title: 'Capital Access',
    description:
      'Manage your investment directly. Deposit. Withdraw. Review allocation.',
  },
  {
    number: '05',
    icon: Globe,
    title: 'Market Intelligence',
    description:
      'Live prices from every market the AI watches. Crypto. African FX. Commodities. All in one view.',
  },
  {
    number: '06',
    icon: Zap,
    title: 'AI Signal Feed',
    description:
      'See what the machine sees. Every signal generated. Before and after execution.',
  },
]

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="features"
      style={{
        backgroundColor: '#0D0D0D',
        padding: '120px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              color: '#C9A84C',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            What You See
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-space), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 4.5vw, 52px)',
              lineHeight: 1.1,
              color: '#FFFFFF',
              letterSpacing: '-1px',
              maxWidth: '500px',
            }}
          >
            Total visibility.<br />
            Zero opacity.
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            backgroundColor: '#1E1E1E',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          className="features-grid"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function FeatureCard({ feature }: { feature: typeof features[number] }) {
  const Icon = feature.icon

  return (
    <motion.div
      variants={fadeUp}
      style={{
        backgroundColor: '#141414',
        padding: '32px',
        cursor: 'default',
        transition: 'border-color 0.2s ease',
        position: 'relative',
      }}
      whileHover={{ backgroundColor: '#161616' }}
    >
      {/* Number */}
      <p
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '11px',
          color: '#2A2A2A',
          letterSpacing: '1px',
          marginBottom: '16px',
        }}
      >
        {feature.number}
      </p>

      {/* Icon */}
      <div
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'rgba(201, 168, 76, 0.08)',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <Icon size={20} color="#C9A84C" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-space), sans-serif',
          fontWeight: 600,
          fontSize: '16px',
          color: '#FFFFFF',
          marginBottom: '12px',
        }}
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '14px',
          lineHeight: 1.65,
          color: '#555555',
        }}
      >
        {feature.description}
      </p>
    </motion.div>
  )
}
