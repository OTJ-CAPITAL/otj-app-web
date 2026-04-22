'use client'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const positions = [
  { symbol: 'BTC/USDT', side: 'LONG', pnl: '+$1,240', color: '#22c55e' },
  { symbol: 'ETH/USDT', side: 'LONG', pnl: '+$380', color: '#22c55e' },
  { symbol: 'SOL/USDT', side: 'SHORT', pnl: '-$120', color: '#ef4444' },
]

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} style={{ minHeight: '100vh', background: '#080808', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', padding: '120px 64px 80px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Left: Text */}
      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '11px', color: '#C9A84C', letterSpacing: '4px', marginBottom: '32px' }}>THE TRANSPARENCY LAYER</motion.div>
        <motion.h1 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(44px, 5vw, 72px)', color: '#FFFFFF', lineHeight: 1.1, marginBottom: '32px' }}>
          See everything.<br />In real time.
        </motion.h1>
        <motion.p variants={fadeUp} style={{ fontFamily: 'Inter', fontSize: '20px', color: '#888888', lineHeight: 1.7, marginBottom: '48px' }}>
          Your capital. Always visible.<br />Every trade. Every signal.<br />Every position. Auditable.
        </motion.p>
        <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px' }}>
          <a href="#waitlist" style={{ background: '#C9A84C', color: '#080808', padding: '14px 32px', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', textDecoration: 'none', borderRadius: '2px' }}>Join The Waitlist →</a>
          <a href="#dashboard" style={{ border: '1px solid #2A2A2A', color: '#FFFFFF', padding: '14px 32px', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', textDecoration: 'none', borderRadius: '2px' }}>See Demo Dashboard</a>
        </motion.div>
      </motion.div>

      {/* Right: Dashboard card */}
      <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
        style={{ background: '#141414', border: '1px solid #1E1E1E', borderRadius: '8px', padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <span style={{ fontFamily: 'Space Grotesk', fontSize: '13px', color: '#888888' }}>Portfolio Overview</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#22c55e' }}>LIVE</span>
          </div>
        </div>
        <div style={{ marginBottom: '8px' }}>
          <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#555555', marginBottom: '4px' }}>Total AUM</div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '32px', color: '#C9A84C', fontWeight: 700 }}>
            {inView ? <CountUp start={0} end={2412000} duration={2} prefix="$" separator="," /> : '$0'}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px', paddingTop: '16px', borderTop: '1px solid #1E1E1E' }}>
          <div><div style={{ fontFamily: 'Inter', fontSize: '11px', color: '#555555', marginBottom: '4px' }}>Monthly Return</div><div style={{ fontFamily: 'JetBrains Mono', fontSize: '18px', color: '#22c55e' }}>+12.4%</div></div>
          <div><div style={{ fontFamily: 'Inter', fontSize: '11px', color: '#555555', marginBottom: '4px' }}>Win Rate</div><div style={{ fontFamily: 'JetBrains Mono', fontSize: '18px', color: '#FFFFFF' }}>68.4%</div></div>
        </div>
        <div style={{ borderTop: '1px solid #1E1E1E', paddingTop: '16px' }}>
          <div style={{ fontFamily: 'Inter', fontSize: '11px', color: '#555555', marginBottom: '12px', letterSpacing: '2px' }}>OPEN POSITIONS</div>
          {positions.map((p, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 2 ? '1px solid #1E1E1E' : 'none' }}>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '13px', color: '#FFFFFF' }}>{p.symbol}</span>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', color: p.side === 'LONG' ? '#22c55e' : '#ef4444', border: `1px solid ${p.side === 'LONG' ? '#22c55e' : '#ef4444'}`, padding: '2px 8px', borderRadius: '2px' }}>{p.side}</span>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '13px', color: p.color }}>{p.pnl}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
