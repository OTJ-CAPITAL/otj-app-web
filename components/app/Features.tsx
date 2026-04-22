'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { LineChart, BarChart2, FileText, Wallet, Globe, Zap } from 'lucide-react'

const features = [
  {
    icon: LineChart,
    num: '01',
    title: 'Live Portfolio',
    body: 'Every open position. Entry price, current value, P&L. Updated on every trade execution.',
    expanded: 'Opens to a live grid showing your positions. Sorted by P&L. Green/red indicators. Refreshes every trade.',
  },
  {
    icon: BarChart2,
    num: '02',
    title: 'Performance Reports',
    body: 'Daily, weekly, monthly, all-time. Sharpe ratio, drawdown, win rate. All the numbers that matter.',
    expanded: 'Bar chart of monthly returns. Summary card with Sharpe, Sortino, max drawdown, win rate. Exportable as PDF.',
  },
  {
    icon: FileText,
    num: '03',
    title: 'Full Trade Log',
    body: "Complete auditable record of every trade. Timestamp, entry, exit, size, and the AI's rationale.",
    expanded: "Sortable table. Every trade has an expandable row showing the AI's signal score and rationale. Full audit trail.",
  },
  {
    icon: Wallet,
    num: '04',
    title: 'Capital Management',
    body: 'Deposit. Withdraw. Review your allocation. You stay in control of your money.',
    expanded: 'Deposit via bank transfer. Withdraw request processed in 24h. Allocation slider lets you adjust risk level.',
  },
  {
    icon: Globe,
    num: '05',
    title: 'Market Data',
    body: 'Live prices across every market the AI monitors. Crypto, African FX, commodities. One screen.',
    expanded: 'Live feed across 40+ instruments. Price, 24h change, volume. Click any instrument to see signal strength.',
  },
  {
    icon: Zap,
    num: '06',
    title: 'Signal Feed',
    body: 'See the signals before and after they execute. Understand exactly why the AI made each decision.',
    expanded: 'Chronological feed of every signal. Score out of 1.0. Whether it executed or was filtered by risk rules.',
  },
]

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  const [activeFeature, setActiveFeature] = useState<number | null>(null)

  return (
    <section id="features" ref={ref} style={{ padding:'120px 32px',borderBottom:'1px solid #E5E5E5' }}>
      <div style={{ maxWidth:'1280px',margin:'0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'2px',color:'#888',marginBottom:'16px' }}>WHAT YOU GET</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'clamp(28px,4vw,48px)',color:'#000',letterSpacing:'-1px',marginBottom:'64px' }}>Total visibility. Zero excuses.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'0' }}>
            {features.map((f, i) => {
              const Icon = f.icon
              const isActive = activeFeature === i
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  onClick={() => setActiveFeature(isActive ? null : i)}
                  style={{
                    padding:'40px 32px',
                    border:'1px solid #E5E5E5',
                    marginLeft: i%3!==0 ? '-1px' : '0',
                    marginTop: i>2 ? '-1px' : '0',
                    cursor:'pointer',
                    background: isActive ? '#000' : '#fff',
                    transition:'background 0.2s',
                    position:'relative',
                    zIndex: isActive ? 1 : 0,
                  }}
                >
                  <div style={{ display:'flex',alignItems:'center',gap:'12px',marginBottom:'20px' }}>
                    <Icon size={18} color={isActive ? '#fff' : '#000'} />
                    <span style={{ fontFamily:'var(--font-mono)',fontSize:'11px',color: isActive ? '#888' : '#BBB' }}>{f.num}</span>
                  </div>
                  <h3 style={{ fontFamily:'var(--font-sg)',fontWeight:700,fontSize:'18px',color: isActive ? '#fff' : '#000',marginBottom:'12px' }}>{f.title}</h3>
                  <p style={{ fontSize:'14px',color: isActive ? '#aaa' : '#555',lineHeight:1.7 }}>{f.body}</p>
                  {isActive && (
                    <motion.p
                      initial={{ opacity:0,y:4 }}
                      animate={{ opacity:1,y:0 }}
                      transition={{ duration:0.2 }}
                      style={{ fontSize:'13px',color:'#888',lineHeight:1.7,marginTop:'16px',paddingTop:'16px',borderTop:'1px solid #333' }}
                    >
                      {f.expanded}
                    </motion.p>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
