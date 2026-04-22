'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { LineChart, BarChart2, FileText, Wallet, Globe, Zap } from 'lucide-react'

const features = [
  { icon: LineChart, num:'01', title:'Live Portfolio', body:'Every open position. Entry price, current value, P&L. Updated on every trade execution.' },
  { icon: BarChart2, num:'02', title:'Performance Reports', body:'Daily, weekly, monthly, all-time. Sharpe ratio, drawdown, win rate. All the numbers that matter.' },
  { icon: FileText, num:'03', title:'Full Trade Log', body:'Complete auditable record of every trade. Timestamp, entry, exit, size, and the AI\'s rationale.' },
  { icon: Wallet, num:'04', title:'Capital Management', body:'Deposit. Withdraw. Review your allocation. You stay in control of your money.' },
  { icon: Globe, num:'05', title:'Market Data', body:'Live prices across every market the AI monitors. Crypto, African FX, commodities. One screen.' },
  { icon: Zap, num:'06', title:'Signal Feed', body:'See the signals before and after they execute. Understand exactly why the AI made each decision.' },
]

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  return (
    <section id="features" ref={ref} style={{ padding:'120px 32px',borderBottom:'1px solid #E5E5E5' }}>
      <div style={{ maxWidth:'1280px',margin:'0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'2px',color:'#888',marginBottom:'16px' }}>WHAT YOU GET</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'clamp(28px,4vw,48px)',color:'#000',letterSpacing:'-1px',marginBottom:'64px' }}>Total visibility. Zero excuses.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'0' }}>
            {features.map((f,i)=>{
              const Icon = f.icon
              return (
                <motion.div key={i} variants={fadeUp} style={{ padding:'40px 32px',border:'1px solid #E5E5E5',marginLeft:i%3!==0?'-1px':'0',marginTop:i>2?'-1px':'0' }}>
                  <div style={{ display:'flex',alignItems:'center',gap:'12px',marginBottom:'20px' }}>
                    <Icon size={18} color="#000" />
                    <span style={{ fontFamily:'var(--font-mono)',fontSize:'11px',color:'#BBB' }}>{f.num}</span>
                  </div>
                  <h3 style={{ fontFamily:'var(--font-sg)',fontWeight:700,fontSize:'18px',color:'#000',marginBottom:'12px' }}>{f.title}</h3>
                  <p style={{ fontSize:'14px',color:'#555',lineHeight:1.7 }}>{f.body}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
