'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp } from '@/lib/animations'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { month: 'M1', value: 100000 }, { month: 'M2', value: 104500 }, { month: 'M3', value: 111200 },
  { month: 'M4', value: 108800 }, { month: 'M5', value: 117600 }, { month: 'M6', value: 124300 },
  { month: 'M7', value: 121500 }, { month: 'M8', value: 132700 }, { month: 'M9', value: 141200 },
  { month: 'M10', value: 138900 }, { month: 'M11', value: 149600 }, { month: 'M12', value: 158400 },
]

const navItems = ['Dashboard', 'Portfolio', 'Trades', 'Signals', 'Capital']

export default function DashboardPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section id="dashboard" ref={ref} style={{ background: '#0D0D0D', padding: '120px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ fontFamily: 'Space Grotesk', fontSize: '10px', color: '#C9A84C', letterSpacing: '3px', marginBottom: '32px' }}>INVESTOR DASHBOARD — LIVE PREVIEW</motion.div>
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{ background: '#141414', border: '1px solid #1E1E1E', borderRadius: '8px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '200px 1fr 240px', minHeight: '480px' }}>
          {/* Sidebar */}
          <div style={{ background: '#111111', borderRight: '1px solid #1E1E1E', padding: '24px 0' }}>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: '#C9A84C', padding: '0 24px 24px', borderBottom: '1px solid #1E1E1E', marginBottom: '16px' }}>OTJ APP</div>
            {navItems.map((item, i) => (
              <div key={item} style={{ padding: '12px 24px', fontFamily: 'Inter', fontSize: '13px', color: i === 0 ? '#FFFFFF' : '#555555', borderLeft: i === 0 ? '2px solid #C9A84C' : '2px solid transparent', cursor: 'pointer' }}>{item}</div>
            ))}
          </div>
          {/* Main */}
          <div style={{ padding: '32px' }}>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '18px', color: '#FFFFFF', marginBottom: '24px' }}>Portfolio Performance</div>
            <div style={{ height: '240px', marginBottom: '24px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="month" stroke="#333" tick={{ fill: '#555', fontSize: 11 }} />
                  <YAxis stroke="#333" tick={{ fill: '#555', fontSize: 11 }} />
                  <Tooltip contentStyle={{ background: '#141414', border: '1px solid #1E1E1E', borderRadius: '4px' }} labelStyle={{ color: '#888' }} itemStyle={{ color: '#C9A84C' }} />
                  <Line type="monotone" dataKey="value" stroke="#C9A84C" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[['Total Return', '+34.2%', '#22c55e'], ['Sharpe Ratio', '1.84', '#FFFFFF'], ['Max Drawdown', '-8.3%', '#ef4444']].map(([label, val, col]) => (
                <div key={label} style={{ background: '#111111', padding: '16px', borderRadius: '4px', border: '1px solid #1E1E1E' }}>
                  <div style={{ fontFamily: 'Inter', fontSize: '11px', color: '#555555', marginBottom: '8px' }}>{label}</div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '18px', color: col, fontWeight: 700 }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right panel */}
          <div style={{ borderLeft: '1px solid #1E1E1E', padding: '32px 24px' }}>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '12px', color: '#888888', letterSpacing: '2px', marginBottom: '16px' }}>OPEN POSITIONS</div>
            {[['BTC/USDT', '+$1,240', '#22c55e'], ['ETH/USDT', '+$380', '#22c55e'], ['SOL/USDT', '-$120', '#ef4444']].map(([sym, pnl, col], i) => (
              <div key={sym} style={{ padding: '12px 0', borderBottom: '1px solid #1E1E1E' }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '13px', color: '#FFFFFF', marginBottom: '4px' }}>{sym}</div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '13px', color: col }}>{pnl}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="#waitlist" style={{ background: '#C9A84C', color: '#080808', padding: '14px 40px', fontFamily: 'Space Grotesk', fontWeight: 600, textDecoration: 'none', borderRadius: '2px', fontSize: '15px' }}>Join Waitlist →</a>
        </motion.div>
      </div>
    </section>
  )
}
