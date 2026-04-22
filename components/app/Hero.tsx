'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import CountUp from 'react-countup'

const positions = [
  { symbol: 'BTC/USDT', side: 'LONG', pnl: '+$1,240', pos: true },
  { symbol: 'ETH/USDT', side: 'LONG', pnl: '+$380', pos: true },
  { symbol: 'SOL/USDT', side: 'SHORT', pnl: '-$120', pos: false },
]

const initialBids = [
  { price: '$94,100', qty: '0.241' },
  { price: '$94,080', qty: '0.512' },
  { price: '$94,050', qty: '1.200' },
]

const initialAsks = [
  { price: '$94,140', qty: '0.088' },
  { price: '$94,160', qty: '0.441' },
  { price: '$94,180', qty: '0.877' },
]

// Deterministic tick values cycling through rows
const bidTicks = [
  ['0.253', '0.498', '1.184'],
  ['0.241', '0.521', '1.200'],
  ['0.268', '0.512', '1.219'],
]
const askTicks = [
  ['0.092', '0.435', '0.891'],
  ['0.088', '0.447', '0.877'],
  ['0.076', '0.441', '0.864'],
]

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  const [bids, setBids] = useState(initialBids)
  const [asks, setAsks] = useState(initialAsks)
  const [flashBidIdx, setFlashBidIdx] = useState<number | null>(null)
  const [flashAskIdx, setFlashAskIdx] = useState<number | null>(null)

  useEffect(() => {
    let tickIndex = 0
    const id = setInterval(() => {
      const idx = tickIndex % 3
      tickIndex = (tickIndex + 1) % 3

      const bSet = bidTicks[idx]
      const aSet = askTicks[idx]

      setBids(prev => prev.map((b, i) => i === idx ? { ...b, qty: bSet[i] } : b))
      setAsks(prev => prev.map((a, i) => i === idx ? { ...a, qty: aSet[i] } : a))

      setFlashBidIdx(idx)
      setFlashAskIdx(idx)
      setTimeout(() => {
        setFlashBidIdx(null)
        setFlashAskIdx(null)
      }, 400)
    }, 2000)
    return () => clearInterval(id)
  }, [])

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

        {/* Order Book */}
        <div style={{ borderTop:'1px solid #E5E5E5',marginTop:'16px',paddingTop:'16px' }}>
          {/* Header */}
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0',marginBottom:'8px' }}>
            <div style={{ fontFamily:'var(--font-mono)',fontSize:'10px',color:'#888',letterSpacing:'2px' }}>BIDS</div>
            <div style={{ fontFamily:'var(--font-mono)',fontSize:'10px',color:'#888',letterSpacing:'2px',textAlign:'right' }}>ASKS</div>
          </div>

          {/* Rows */}
          {[0,1,2].map(i => (
            <div key={i} style={{ display:'grid',gridTemplateColumns:'1fr auto 1fr',gap:'8px',marginBottom:'4px',alignItems:'center' }}>
              {/* Bid */}
              <div style={{
                display:'flex',
                gap:'8px',
                fontFamily:'var(--font-mono)',
                fontSize:'11px',
                color:'#000',
                background: flashBidIdx === i ? 'rgba(0,0,0,0.06)' : 'transparent',
                transition:'background 0.15s',
                padding:'2px 4px',
              }}>
                <span>{bids[i].price}</span>
                <span style={{ color:'#555' }}>{bids[i].qty}</span>
              </div>

              {/* Middle spacer */}
              <div style={{ width:'1px',background:'#E5E5E5',height:'16px' }} />

              {/* Ask */}
              <div style={{
                display:'flex',
                justifyContent:'flex-end',
                gap:'8px',
                fontFamily:'var(--font-mono)',
                fontSize:'11px',
                color:'#888',
                background: flashAskIdx === i ? 'rgba(0,0,0,0.06)' : 'transparent',
                transition:'background 0.15s',
                padding:'2px 4px',
              }}>
                <span style={{ color:'#555' }}>{asks[i].qty}</span>
                <span>{asks[i].price}</span>
              </div>
            </div>
          ))}

          {/* Spread */}
          <div style={{ marginTop:'8px',textAlign:'center',fontFamily:'var(--font-mono)',fontSize:'10px',color:'#888',letterSpacing:'1px' }}>
            Spread: $40
          </div>
        </div>
      </motion.div>
    </section>
  )
}
