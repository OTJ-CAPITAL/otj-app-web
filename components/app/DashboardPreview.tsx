'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { fadeUp } from '@/lib/animations'
import Link from 'next/link'

// Mock 90-day performance data
const chartData = [
  { month: 'Jan 1', value: 100 },
  { month: 'Jan 15', value: 104 },
  { month: 'Feb 1', value: 101 },
  { month: 'Feb 15', value: 108 },
  { month: 'Mar 1', value: 111 },
  { month: 'Mar 15', value: 109 },
  { month: 'Apr 1', value: 116 },
  { month: 'Apr 15', value: 121 },
  { month: 'May 1', value: 119 },
  { month: 'May 15', value: 127 },
  { month: 'Jun 1', value: 124 },
  { month: 'Jun 15', value: 130 },
  { month: 'Jul 1', value: 134 },
]

const navItems = [
  { label: 'Dashboard', active: true },
  { label: 'Portfolio', active: false },
  { label: 'Trades', active: false },
  { label: 'Signals', active: false },
  { label: 'Capital', active: false },
]

const openPositions = [
  { symbol: 'BTC/USD', pnl: '+$8,420', status: 'LONG', positive: true },
  { symbol: 'ETH/USD', pnl: '+$3,105', status: 'LONG', positive: true },
  { symbol: 'EUR/NGN', pnl: '-$640', status: 'SHORT', positive: false },
]

const statsCards = [
  { label: 'Total Return', value: '+34.2%', color: '#22C55E' },
  { label: 'Sharpe Ratio', value: '1.84', color: '#FFFFFF' },
  { label: 'Max Drawdown', value: '-8.3%', color: '#EF4444' },
]

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: '#1E1E1E',
          border: '1px solid #2A2A2A',
          borderRadius: '4px',
          padding: '10px 14px',
        }}
      >
        <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', color: '#888888', marginBottom: '4px' }}>
          {label}
        </p>
        <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '14px', fontWeight: 600, color: '#C9A84C' }}>
          {payload[0].value}%
        </p>
      </div>
    )
  }
  return null
}

export default function DashboardPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="dashboard"
      style={{
        backgroundColor: '#080808',
        padding: '120px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Label */}
        <p className="section-label-dash" style={{ marginBottom: '48px', textAlign: 'center' }}>
          Investor Dashboard — Live Preview
        </p>

        {/* Dashboard card */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="dashboard-wrapper"
        >
          {/* Sidebar */}
          <div className="dashboard-sidebar">
            {/* Sidebar logo */}
            <div style={{ padding: '0 20px 24px', borderBottom: '1px solid #1E1E1E' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                <span style={{ fontFamily: 'var(--font-space), sans-serif', fontWeight: 700, fontSize: '15px', color: '#C9A84C' }}>OTJ</span>
                <span style={{ fontFamily: 'var(--font-space), sans-serif', fontWeight: 700, fontSize: '15px', color: '#FFFFFF' }}>APP</span>
              </div>
            </div>

            {/* Nav items */}
            <nav style={{ padding: '16px 0', flex: 1 }}>
              {navItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 20px',
                    borderLeft: item.active ? '2px solid #C9A84C' : '2px solid transparent',
                    backgroundColor: item.active ? 'rgba(201, 168, 76, 0.06)' : 'transparent',
                    cursor: 'default',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '13px',
                      fontWeight: item.active ? 500 : 400,
                      color: item.active ? '#FFFFFF' : '#555555',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </nav>
          </div>

          {/* Main content */}
          <div style={{ flex: 1, padding: '28px', minWidth: 0 }}>
            {/* Chart header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-space), sans-serif',
                  fontWeight: 600,
                  fontSize: '15px',
                  color: '#FFFFFF',
                }}
              >
                Portfolio Performance
              </h3>
              {/* Date range tabs */}
              <div style={{ display: 'flex', gap: '4px' }}>
                {['1M', '3M', '6M', 'ALL'].map((range, i) => (
                  <span
                    key={range}
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '12px',
                      fontWeight: i === 1 ? 600 : 400,
                      color: i === 1 ? '#C9A84C' : '#555555',
                      padding: '4px 10px',
                      backgroundColor: i === 1 ? 'rgba(201,168,76,0.1)' : 'transparent',
                      borderRadius: '2px',
                      cursor: 'default',
                    }}
                  >
                    {range}
                  </span>
                ))}
              </div>
            </div>

            {/* Chart */}
            <div style={{ height: '200px', marginBottom: '24px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 4, right: 8, bottom: 4, left: 0 }}>
                  <XAxis
                    dataKey="month"
                    tick={{ fontFamily: 'var(--font-inter)', fontSize: 11, fill: '#555555' }}
                    axisLine={{ stroke: '#1E1E1E' }}
                    tickLine={false}
                    interval={2}
                  />
                  <YAxis
                    tick={{ fontFamily: 'var(--font-inter)', fontSize: 11, fill: '#555555' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}%`}
                    domain={['auto', 'auto']}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#C9A84C"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, fill: '#C9A84C', stroke: '#C9A84C' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Stat cards */}
            <div className="stat-cards-grid">
              {statsCards.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    backgroundColor: '#111111',
                    border: '1px solid #1E1E1E',
                    borderRadius: '4px',
                    padding: '16px',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', color: '#555555', marginBottom: '6px' }}>
                    {stat.label}
                  </p>
                  <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '18px', fontWeight: 600, color: stat.color }}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="dashboard-right-panel">
            <h4
              style={{
                fontFamily: 'var(--font-space), sans-serif',
                fontWeight: 600,
                fontSize: '13px',
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              Open Positions
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {openPositions.map((pos, i) => (
                <div
                  key={i}
                  style={{
                    padding: '12px 0',
                    borderBottom: i < openPositions.length - 1 ? '1px solid #1E1E1E' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', fontWeight: 500, color: '#FFFFFF' }}>
                      {pos.symbol}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '10px',
                        fontWeight: 600,
                        color: pos.status === 'LONG' ? '#22C55E' : '#EF4444',
                        backgroundColor: pos.status === 'LONG' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
                        padding: '2px 6px',
                        borderRadius: '2px',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {pos.status}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: pos.positive ? '#22C55E' : '#EF4444',
                    }}
                  >
                    {pos.pnl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="#waitlist" className="dashboard-cta">
            Join Waitlist →
          </Link>
        </div>
      </div>

      <style>{`
        .section-label-dash {
          font-family: var(--font-inter), sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: #C9A84C;
          letter-spacing: 4px;
          text-transform: uppercase;
        }
        .dashboard-wrapper {
          background-color: #141414;
          border: 1px solid #1E1E1E;
          border-radius: 4px;
          overflow: hidden;
          display: flex;
        }
        .dashboard-sidebar {
          width: 192px;
          min-width: 192px;
          background-color: #111111;
          border-right: 1px solid #1E1E1E;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
        }
        .dashboard-right-panel {
          width: 220px;
          min-width: 220px;
          border-left: 1px solid #1E1E1E;
          padding: 28px 20px;
        }
        .stat-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .dashboard-cta {
          font-family: var(--font-inter), sans-serif;
          font-weight: 500;
          font-size: 15px;
          color: #080808;
          background-color: #C9A84C;
          padding: 14px 32px;
          border-radius: 2px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background-color 0.2s ease;
        }
        .dashboard-cta:hover { background-color: #E8C96A; }
        @media (max-width: 1024px) {
          .dashboard-right-panel { display: none !important; }
        }
        @media (max-width: 768px) {
          .dashboard-sidebar { display: none !important; }
          .stat-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
