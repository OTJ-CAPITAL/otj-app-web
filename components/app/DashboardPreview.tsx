'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp } from '@/lib/animations'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  {m:'Jan',v:100000},{m:'Feb',v:108000},{m:'Mar',v:115000},{m:'Apr',v:112000},
  {m:'May',v:124000},{m:'Jun',v:131000},{m:'Jul',v:128000},{m:'Aug',v:145000},
  {m:'Sep',v:152000},{m:'Oct',v:149000},{m:'Nov',v:168000},{m:'Dec',v:182000},
]
const navItems = ['Dashboard','Portfolio','Trades','Signals','Capital']

export default function DashboardPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  return (
    <section id="dashboard" ref={ref} style={{ padding:'120px 32px',background:'#F5F5F5',borderBottom:'1px solid #E5E5E5' }}>
      <div style={{ maxWidth:'1280px',margin:'0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} style={{ fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'2px',color:'#888',marginBottom:'32px' }}>LIVE DASHBOARD PREVIEW</motion.div>
        <motion.div variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'}
          style={{ border:'1px solid #000',background:'#fff',display:'grid',gridTemplateColumns:'180px 1fr 220px',minHeight:'460px' }}>
          <div style={{ borderRight:'1px solid #E5E5E5',padding:'24px 0' }}>
            <div style={{ fontFamily:'var(--font-sg)',fontWeight:700,fontSize:'13px',color:'#000',padding:'0 20px 20px',borderBottom:'1px solid #E5E5E5',marginBottom:'8px' }}>OTJ APP</div>
            {navItems.map((item,i)=>(
              <div key={item} style={{ padding:'10px 20px',fontFamily:'var(--font-inter)',fontSize:'13px',color:i===0?'#000':'#AAA',borderLeft:i===0?'2px solid #000':'2px solid transparent',cursor:'pointer' }}>{item}</div>
            ))}
          </div>
          <div style={{ padding:'32px' }}>
            <div style={{ fontFamily:'var(--font-sg)',fontWeight:600,fontSize:'16px',color:'#000',marginBottom:'24px' }}>Portfolio Performance</div>
            <div style={{ height:'220px',marginBottom:'24px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="m" stroke="#E5E5E5" tick={{ fill:'#888',fontSize:11 }} />
                  <YAxis stroke="#E5E5E5" tick={{ fill:'#888',fontSize:11 }} />
                  <Tooltip contentStyle={{ background:'#fff',border:'1px solid #E5E5E5',borderRadius:'0',fontSize:'12px' }} />
                  <Line type="monotone" dataKey="v" stroke="#000" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px' }}>
              {[['Total Return','+82%'],['Sharpe Ratio','1.84'],['Max Drawdown','-8.3%']].map(([l,v])=>(
                <div key={l} style={{ background:'#F5F5F5',padding:'16px',border:'1px solid #E5E5E5' }}>
                  <div style={{ fontFamily:'var(--font-inter)',fontSize:'11px',color:'#888',marginBottom:'8px' }}>{l}</div>
                  <div style={{ fontFamily:'var(--font-mono)',fontSize:'18px',fontWeight:700,color:'#000' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderLeft:'1px solid #E5E5E5',padding:'24px' }}>
            <div style={{ fontFamily:'var(--font-mono)',fontSize:'10px',color:'#888',letterSpacing:'2px',marginBottom:'16px' }}>POSITIONS</div>
            {[['BTC/USDT','+$1,240'],['ETH/USDT','+$380'],['SOL/USDT','-$120']].map(([s,p],i)=>(
              <div key={s} style={{ padding:'12px 0',borderBottom:'1px solid #F0F0F0' }}>
                <div style={{ fontFamily:'var(--font-mono)',fontSize:'13px',color:'#000',marginBottom:'4px' }}>{s}</div>
                <div style={{ fontFamily:'var(--font-mono)',fontSize:'13px',color:i<2?'#000':'#888' }}>{p}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
