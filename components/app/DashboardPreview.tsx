'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp } from '@/lib/animations'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const chartData = [
  {m:'Jan',v:100000},{m:'Feb',v:108000},{m:'Mar',v:115000},{m:'Apr',v:112000},
  {m:'May',v:124000},{m:'Jun',v:131000},{m:'Jul',v:128000},{m:'Aug',v:145000},
  {m:'Sep',v:152000},{m:'Oct',v:149000},{m:'Nov',v:168000},{m:'Dec',v:182000},
]

const navItems = ['Dashboard','Portfolio','Trades','Signals','Capital'] as const
type Tab = typeof navItems[number]

const initialPositions = [
  { symbol: 'BTC/USDT', pnl: 1240, raw: 1240 },
  { symbol: 'ETH/USDT', pnl: 380, raw: 380 },
  { symbol: 'SOL/USDT', pnl: -120, raw: -120 },
]

function fmtPnl(v: number) {
  return (v >= 0 ? '+$' : '-$') + Math.abs(v).toLocaleString()
}

function DashboardTab() {
  return (
    <>
      <div style={{ fontFamily:'var(--font-sg)',fontWeight:600,fontSize:'16px',color:'#000',marginBottom:'24px' }}>Portfolio Performance</div>
      <div style={{ height:'220px',marginBottom:'24px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
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
    </>
  )
}

function PortfolioTab() {
  const rows = [
    { asset:'BTC/USDT', size:'0.042', entry:'$91,200', current:'$94,120', pnl:'+$122.64', pos:true },
    { asset:'ETH/USDT', size:'1.2',   entry:'$1,740',  current:'$1,820',  pnl:'+$96.00',  pos:true },
    { asset:'SOL/USDT', size:'8.0',   entry:'$148',    current:'$143',    pnl:'-$40.00',  pos:false },
  ]
  const thStyle: React.CSSProperties = { fontFamily:'var(--font-inter)',fontSize:'11px',color:'#888',padding:'10px 12px',textAlign:'left',fontWeight:500 }
  const tdStyle: React.CSSProperties = { fontFamily:'var(--font-mono)',fontSize:'12px',color:'#111',padding:'10px 12px' }
  return (
    <>
      <div style={{ fontFamily:'var(--font-sg)',fontWeight:600,fontSize:'16px',color:'#000',marginBottom:'24px' }}>Open Positions</div>
      <div style={{ overflowX:'auto' }}>
        <table style={{ width:'100%',borderCollapse:'collapse',border:'1px solid #E5E5E5' }}>
          <thead>
            <tr style={{ background:'#F5F5F5' }}>
              {['Asset','Size','Entry','Current','P&L'].map(h=>(
                <th key={h} style={thStyle}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i)=>(
              <tr key={i} style={{ borderTop:'1px solid #E5E5E5' }}>
                <td style={tdStyle}>{r.asset}</td>
                <td style={tdStyle}>{r.size}</td>
                <td style={tdStyle}>{r.entry}</td>
                <td style={tdStyle}>{r.current}</td>
                <td style={{ ...tdStyle, color: r.pos ? '#22c55e' : '#ef4444', fontWeight:600 }}>{r.pnl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

function TradesTab() {
  const trades = [
    { dt:'2026-04-22 14:32:01', side:'BUY',  pair:'BTC/USDT', size:'0.042', price:'$94,120', note:'' },
    { dt:'2026-04-22 11:18:44', side:'SELL', pair:'ETH/USDT', size:'0.8',   price:'$1,835',  note:'+$76' },
    { dt:'2026-04-22 08:05:12', side:'BUY',  pair:'SOL/USDT', size:'8.0',   price:'$148',    note:'' },
    { dt:'2026-04-21 22:41:09', side:'SELL', pair:'BTC/USDT', size:'0.038', price:'$93,800', note:'+$98' },
    { dt:'2026-04-21 19:22:33', side:'BUY',  pair:'ETH/USDT', size:'2.0',   price:'$1,720',  note:'' },
  ]
  return (
    <>
      <div style={{ fontFamily:'var(--font-sg)',fontWeight:600,fontSize:'16px',color:'#000',marginBottom:'24px' }}>Trade Log</div>
      <div>
        {trades.map((t,i)=>(
          <div key={i} style={{ display:'flex',gap:'12px',alignItems:'center',padding:'9px 12px',background:i%2===0?'#FAFAFA':'#fff',fontFamily:'var(--font-mono)',fontSize:'12px',color:'#111' }}>
            <span style={{ color:'#888',minWidth:'148px' }}>{t.dt}</span>
            <span style={{ fontWeight: t.side==='BUY'?600:400, color: t.side==='BUY'?'#000':'#555', minWidth:'36px' }}>{t.side}</span>
            <span style={{ minWidth:'80px' }}>{t.pair}</span>
            <span style={{ minWidth:'48px' }}>{t.size}</span>
            <span>@ {t.price}</span>
            {t.note && <span style={{ color:'#22c55e',marginLeft:'8px' }}>{t.note}</span>}
          </div>
        ))}
      </div>
    </>
  )
}

function SignalsTab() {
  const signals = [
    { strength:'STRONG', strategy:'MOMENTUM',  pair:'BTC/USDT',  tf:'1h', score:'0.87', dir:'LONG' },
    { strength:'WEAK',   strategy:'MEAN-REV',  pair:'ETH/USDT',  tf:'4h', score:'0.52', dir:'HOLD' },
    { strength:'STRONG', strategy:'FUNDING',   pair:'BTC-PERP',  tf:'-',  score:'0.91', dir:'LONG' },
    { strength:'WEAK',   strategy:'MOMENTUM',  pair:'SOL/USDT',  tf:'1h', score:'0.48', dir:'SKIP' },
  ]
  return (
    <>
      <div style={{ fontFamily:'var(--font-sg)',fontWeight:600,fontSize:'16px',color:'#000',marginBottom:'24px' }}>AI Signals</div>
      <div style={{ display:'flex',flexDirection:'column',gap:'10px' }}>
        {signals.map((s,i)=>(
          <div key={i} style={{ display:'flex',alignItems:'center',gap:'12px',padding:'10px 12px',border:'1px solid #E5E5E5',fontFamily:'var(--font-mono)',fontSize:'12px' }}>
            <span style={{
              background: s.strength==='STRONG'?'#000':'#E5E5E5',
              color: s.strength==='STRONG'?'#fff':'#888',
              padding:'2px 6px',
              fontSize:'10px',
              minWidth:'58px',
              textAlign:'center',
              letterSpacing:'0.5px',
            }}>{s.strength}</span>
            <span style={{ color:'#555',minWidth:'76px' }}>{s.strategy}</span>
            <span style={{ color:'#111',minWidth:'72px' }}>{s.pair}</span>
            <span style={{ color:'#888',minWidth:'24px' }}>{s.tf}</span>
            <span style={{ color:'#888' }}>Score: <span style={{ color:'#111',fontWeight:600 }}>{s.score}</span></span>
            <span style={{ marginLeft:'auto',color:'#111',fontWeight:600 }}>→ {s.dir}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function CapitalTab() {
  const deployed = 76.6
  const cash = 23.4
  const rows = [
    ['Total AUM', '$2,412,000', ''],
    ['Deployed', '$1,847,200', '(76.6%)'],
    ['Cash Reserve', '$564,800', '(23.4%)'],
    ['Investor Count', '12', ''],
    ['Min Investment', '$50,000', ''],
  ]
  return (
    <>
      <div style={{ fontFamily:'var(--font-sg)',fontWeight:600,fontSize:'16px',color:'#000',marginBottom:'24px' }}>Capital Overview</div>
      <div style={{ display:'flex',flexDirection:'column',gap:'0',marginBottom:'28px' }}>
        {rows.map(([label,val,sub],i)=>(
          <div key={i} style={{ display:'flex',justifyContent:'space-between',alignItems:'center',padding:'11px 0',borderBottom:'1px solid #F0F0F0' }}>
            <span style={{ fontFamily:'var(--font-inter)',fontSize:'13px',color:'#555' }}>{label}</span>
            <span style={{ fontFamily:'var(--font-mono)',fontSize:'13px',color:'#000',fontWeight:600 }}>
              {val}{sub && <span style={{ color:'#888',fontWeight:400,marginLeft:'6px',fontSize:'11px' }}>{sub}</span>}
            </span>
          </div>
        ))}
      </div>
      <div style={{ marginTop:'8px' }}>
        <div style={{ fontFamily:'var(--font-inter)',fontSize:'11px',color:'#888',marginBottom:'8px' }}>ALLOCATION</div>
        <div style={{ display:'flex',height:'8px',borderRadius:'0',overflow:'hidden',border:'1px solid #E5E5E5' }}>
          <div style={{ width:`${deployed}%`,background:'#000' }} />
          <div style={{ flex:1,background:'#E5E5E5' }} />
        </div>
        <div style={{ display:'flex',gap:'16px',marginTop:'8px' }}>
          <span style={{ fontFamily:'var(--font-mono)',fontSize:'10px',color:'#888' }}>
            <span style={{ display:'inline-block',width:'8px',height:'8px',background:'#000',marginRight:'4px',verticalAlign:'middle' }} />
            Deployed {deployed}%
          </span>
          <span style={{ fontFamily:'var(--font-mono)',fontSize:'10px',color:'#888' }}>
            <span style={{ display:'inline-block',width:'8px',height:'8px',background:'#E5E5E5',border:'1px solid #CCC',marginRight:'4px',verticalAlign:'middle' }} />
            Cash {cash}%
          </span>
        </div>
      </div>
    </>
  )
}

export default function DashboardPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  const [activeTab, setActiveTab] = useState<Tab>('Dashboard')
  const [positions, setPositions] = useState(initialPositions)
  const [flashIndex, setFlashIndex] = useState<number | null>(null)

  useEffect(() => {
    const id = setInterval(() => {
      const idx = Math.floor(Math.random() * 3)
      const delta = (Math.random() * 20 - 10)
      setPositions(prev => prev.map((p, i) => i === idx ? { ...p, pnl: Math.round((p.pnl + delta) * 100) / 100 } : p))
      setFlashIndex(idx)
      setTimeout(() => setFlashIndex(null), 500)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const tabContent: Record<Tab, React.ReactNode> = {
    Dashboard: <DashboardTab />,
    Portfolio: <PortfolioTab />,
    Trades: <TradesTab />,
    Signals: <SignalsTab />,
    Capital: <CapitalTab />,
  }

  return (
    <section id="dashboard" ref={ref} style={{ padding:'120px 32px',background:'#F5F5F5',borderBottom:'1px solid #E5E5E5' }}>
      <div style={{ maxWidth:'1280px',margin:'0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} style={{ fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'2px',color:'#888',marginBottom:'32px' }}>LIVE DASHBOARD PREVIEW</motion.div>
        <motion.div variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'}
          style={{ border:'1px solid #000',background:'#fff',display:'grid',gridTemplateColumns:'180px 1fr 220px',minHeight:'460px' }}>

          {/* Sidebar */}
          <div style={{ borderRight:'1px solid #E5E5E5',padding:'24px 0' }}>
            <div style={{ fontFamily:'var(--font-sg)',fontWeight:700,fontSize:'13px',color:'#000',padding:'0 20px 20px',borderBottom:'1px solid #E5E5E5',marginBottom:'8px' }}>OTJ APP</div>
            {navItems.map((item) => (
              <div
                key={item}
                onClick={() => setActiveTab(item)}
                style={{
                  padding:'10px 20px',
                  fontFamily:'var(--font-inter)',
                  fontSize:'13px',
                  color: activeTab===item ? '#000' : '#AAA',
                  borderLeft: activeTab===item ? '2px solid #000' : '2px solid transparent',
                  cursor:'pointer',
                  transition:'all 0.15s',
                }}
              >{item}</div>
            ))}
          </div>

          {/* Center panel */}
          <div style={{ padding:'32px', overflow:'hidden' }}>
            <motion.div
              key={activeTab}
              initial={{ opacity:0, y:8 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.2 }}
            >
              {tabContent[activeTab]}
            </motion.div>
          </div>

          {/* Right positions panel */}
          <div style={{ borderLeft:'1px solid #E5E5E5',padding:'24px' }}>
            <div style={{ fontFamily:'var(--font-mono)',fontSize:'10px',color:'#888',letterSpacing:'2px',marginBottom:'16px' }}>POSITIONS</div>
            {positions.map((p, i) => (
              <div
                key={p.symbol}
                style={{
                  padding:'12px 0',
                  borderBottom:'1px solid #F0F0F0',
                  background: flashIndex===i ? 'rgba(0,0,0,0.05)' : 'transparent',
                  transition:'background 0.3s',
                }}
              >
                <div style={{ fontFamily:'var(--font-mono)',fontSize:'13px',color:'#000',marginBottom:'4px' }}>{p.symbol}</div>
                <div style={{ fontFamily:'var(--font-mono)',fontSize:'13px',color: p.pnl >= 0 ? '#22c55e' : '#ef4444' }}>
                  {fmtPnl(p.pnl)}
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
