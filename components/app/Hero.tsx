'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import CountUp from 'react-countup'

const positions = [
  { symbol: 'BTC/USDT', side: 'LONG', pnl: '+$1,240', pos: true },
  { symbol: 'ETH/USDT', side: 'LONG', pnl: '+$380', pos: true },
  { symbol: 'SOL/USDT', side: 'SHORT', pnl: '-$120', pos: false },
]

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  return (
    <section ref={ref} style={{ minHeight:'100vh',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'80px',alignItems:'center',padding:'100px 64px 80px',borderBottom:'1px solid #E5E5E5' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
        <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'2px',color:'#888',marginBottom:'32px' }}>OTJ APP — INVESTOR DASHBOARD</motion.div>
        <motion.h1 variants={fadeUp} style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'clamp(36px,5vw,64px)',color:'#000',lineHeight:1.05,letterSpacing:'-2px',marginBottom:'24px' }}>
          See every trade<br />your money makes.
        </motion.h1>
        <motion.p variants={fadeUp} style={{ fontSize:'18px',color:'#444',lineHeight:1.7,marginBottom:'40px' }}>
          OTJ App gives investors a real-time view of every position, signal, and execution in the fund. No black boxes. No monthly PDFs. Live data, always.
        </motion.p>
        <motion.div variants={fadeUp} style={{ display:'flex',gap:'16px',flexWrap:'wrap' }}>
          <a href="#waitlist" style={{ background:'#000',color:'#fff',padding:'14px 32px',fontFamily:'var(--font-sg)',fontWeight:600,fontSize:'15px' }}>Join the Waitlist</a>
          <a href="#dashboard" style={{ border:'1px solid #000',color:'#000',padding:'14px 32px',fontFamily:'var(--font-sg)',fontWeight:600,fontSize:'15px' }}>See the Dashboard</a>
        </motion.div>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'}
        style={{ background:'#F5F5F5',border:'1px solid #E5E5E5',padding:'32px',fontFamily:'var(--font-mono)' }}>
        <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'24px' }}>
          <span style={{ fontSize:'12px',color:'#888' }}>Portfolio Overview</span>
          <div style={{ display:'flex',alignItems:'center',gap:'8px' }}>
            <div style={{ width:'8px',height:'8px',borderRadius:'50%',background:'#000',animation:'pulse 2s ease-in-out infinite' }} />
            <span style={{ fontSize:'11px',color:'#000',letterSpacing:'1px' }}>LIVE</span>
          </div>
        </div>
        <div style={{ marginBottom:'8px',fontSize:'11px',color:'#888' }}>Total AUM</div>
        <div style={{ fontSize:'36px',fontWeight:700,color:'#000',marginBottom:'24px',letterSpacing:'-1px' }}>
          ${inView ? <CountUp start={0} end={2412} duration={2} separator="," /> : '0'},000
        </div>
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px',marginBottom:'24px',paddingTop:'16px',borderTop:'1px solid #E5E5E5' }}>
          <div><div style={{ fontSize:'11px',color:'#888',marginBottom:'4px' }}>Monthly Return</div><div style={{ fontSize:'18px',fontWeight:700,color:'#000' }}>+12.4%</div></div>
          <div><div style={{ fontSize:'11px',color:'#888',marginBottom:'4px' }}>Win Rate</div><div style={{ fontSize:'18px',fontWeight:700,color:'#000' }}>68.4%</div></div>
        </div>
        <div style={{ borderTop:'1px solid #E5E5E5',paddingTop:'16px' }}>
          <div style={{ fontSize:'10px',color:'#888',letterSpacing:'2px',marginBottom:'12px' }}>OPEN POSITIONS</div>
          {positions.map((p,i)=>(
            <div key={i} style={{ display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:i<2?'1px solid #F0F0F0':'none' }}>
              <span style={{ fontSize:'13px',color:'#000' }}>{p.symbol}</span>
              <span style={{ fontSize:'11px',border:'1px solid #000',padding:'2px 8px',color:'#000' }}>{p.side}</span>
              <span style={{ fontSize:'13px',color: p.pos?'#000':'#888' }}>{p.pnl}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
