'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { LineChart, BarChart2, FileText, Wallet, Globe, Zap } from 'lucide-react'

const features = [
  { icon: LineChart, num: '01', title: 'Live Portfolio', body: 'Real-time view of every active position. Entry points, current value, P&L. Updated on every execution.' },
  { icon: BarChart2, num: '02', title: 'Performance Reports', body: 'Daily, weekly, monthly, all-time. Risk-adjusted returns. Drawdown analysis. Sharpe ratio.' },
  { icon: FileText, num: '03', title: 'Trade Log', body: 'Complete auditable record. Timestamp. Entry. Exit. Size. AI rationale for every decision.' },
  { icon: Wallet, num: '04', title: 'Capital Access', body: 'Manage your investment directly. Deposit. Withdraw. Review allocation.' },
  { icon: Globe, num: '05', title: 'Market Intelligence', body: 'Live prices from every market the AI watches. Crypto. African FX. Commodities. All in one view.' },
  { icon: Zap, num: '06', title: 'AI Signal Feed', body: 'See what the machine sees. Every signal generated. Before and after execution.' },
]

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section id="features" ref={ref} style={{ background: '#080808', padding: '120px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '10px', color: '#C9A84C', letterSpacing: '3px', marginBottom: '16px' }}>WHAT YOU SEE</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 48px)', color: '#FFFFFF', marginBottom: '64px' }}>Total visibility.<br />Zero opacity.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div key={i} variants={fadeUp} style={{ background: '#141414', border: '1px solid #1E1E1E', padding: '40px 32px', borderRadius: '4px', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#1E1E1E')}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div style={{ background: 'rgba(201,168,76,0.1)', padding: '10px', borderRadius: '4px' }}>
                      <Icon size={18} color="#C9A84C" />
                    </div>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#C9A84C' }}>{f.num}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '18px', color: '#FFFFFF', marginBottom: '12px' }}>{f.title}</h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#888888', lineHeight: 1.7 }}>{f.body}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
