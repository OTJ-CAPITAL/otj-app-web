'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const signalPool = [
  { tag: '[MOMENTUM]', body: 'BTC/USDT 1h → LONG  Score: 0.87', tagType: 'strong' },
  { tag: '[MEAN-REV]', body: 'ETH/USDT 4h → HOLD  Score: 0.52', tagType: 'weak' },
  { tag: '[FUNDING] ', body: 'BTC-PERP  — → LONG  Score: 0.91', tagType: 'strong' },
  { tag: '[MOMENTUM]', body: 'SOL/USDT 1h → SKIP  Score: 0.48', tagType: 'weak' },
  { tag: '[ARITH]   ', body: 'BNB/USDT 1h → LONG  Score: 0.73', tagType: 'weak' },
  { tag: '[MEAN-REV]', body: 'BTC/USDT 4h → SHORT Score: 0.61', tagType: 'weak' },
]

interface FeedEntry {
  id: number
  timestamp: string
  tag: string
  body: string
  tagType: string
}

let seedEntries: FeedEntry[] = [
  { id: 1, timestamp: '09:41:00', tag: '[MOMENTUM]', body: 'BTC/USDT 1h → LONG  Score: 0.87', tagType: 'strong' },
  { id: 2, timestamp: '09:40:58', tag: '[FUNDING] ', body: 'BTC-PERP  — → LONG  Score: 0.91', tagType: 'strong' },
  { id: 3, timestamp: '09:40:56', tag: '[MEAN-REV]', body: 'ETH/USDT 4h → HOLD  Score: 0.52', tagType: 'weak' },
]

let globalId = 4

export default function LiveFeed() {
  const { ref, inView } = useInView({ triggerOnce: false, fallbackInView: true })
  const [entries, setEntries] = useState<FeedEntry[]>(seedEntries)
  const [poolIndex, setPoolIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      const signal = signalPool[poolIndex % signalPool.length]
      const timestamp = new Date().toTimeString().slice(0, 8)
      const newEntry: FeedEntry = {
        id: globalId++,
        timestamp,
        tag: signal.tag,
        body: signal.body,
        tagType: signal.tagType,
      }
      setEntries(prev => [newEntry, ...prev].slice(0, 8))
      setPoolIndex(p => (p + 1) % signalPool.length)
    }, 2000)
    return () => clearInterval(id)
  }, [poolIndex])

  return (
    <section ref={ref} style={{ background:'#000',padding:'80px 32px',borderBottom:'1px solid #222' }}>
      <div style={{ maxWidth:'1280px',margin:'0 auto' }}>
        {/* Header */}
        <div style={{ fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'2px',color:'#555',marginBottom:'16px' }}>
          LIVE SIGNAL FEED
        </div>
        <h2 style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'clamp(28px,4vw,48px)',color:'#fff',letterSpacing:'-1px',marginBottom:'40px',lineHeight:1.1 }}>
          The AI, thinking out loud.
        </h2>

        {/* Terminal box */}
        <div style={{ background:'#0A0A0A',border:'1px solid #222',maxHeight:'320px',overflow:'hidden',position:'relative' }}>
          {/* Terminal header bar */}
          <div style={{ background:'#111',padding:'12px 20px',borderBottom:'1px solid #222',display:'flex',alignItems:'center',gap:'8px' }}>
            <span style={{ width:'10px',height:'10px',borderRadius:'50%',background:'#FF5F56',display:'inline-block' }} />
            <span style={{ width:'10px',height:'10px',borderRadius:'50%',background:'#FFBD2E',display:'inline-block' }} />
            <span style={{ width:'10px',height:'10px',borderRadius:'50%',background:'#27C93F',display:'inline-block' }} />
            <span style={{ fontFamily:'var(--font-mono)',fontSize:'11px',color:'#555',marginLeft:'8px' }}>otj-signal-feed — bash</span>
          </div>

          {/* Feed entries */}
          <div style={{ padding:'0' }}>
            <AnimatePresence initial={false}>
              {entries.map(entry => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity:0, x:-8 }}
                  animate={{ opacity:1, x:0 }}
                  exit={{ opacity:0 }}
                  transition={{ duration:0.2 }}
                  style={{
                    fontFamily:'var(--font-mono)',
                    fontSize:'12px',
                    color:'#888',
                    padding:'8px 20px',
                    borderBottom:'1px solid #111',
                    display:'flex',
                    gap:'12px',
                    alignItems:'center',
                  }}
                >
                  <span style={{ color:'#444',minWidth:'64px' }}>{entry.timestamp}</span>
                  <span style={{
                    background: entry.tagType === 'strong' ? '#000' : 'transparent',
                    color: entry.tagType === 'strong' ? '#fff' : '#888',
                    border: entry.tagType === 'strong' ? '1px solid #333' : '1px solid transparent',
                    padding:'1px 4px',
                    fontSize:'11px',
                    minWidth:'80px',
                    display:'inline-block',
                    whiteSpace:'nowrap',
                  }}>{entry.tag.trim()}</span>
                  <span>{entry.body}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Fade-out gradient at bottom */}
          <div style={{
            position:'absolute',
            bottom:0,
            left:0,
            right:0,
            height:'60px',
            background:'linear-gradient(transparent, #0A0A0A)',
            pointerEvents:'none',
          }} />
        </div>
      </div>
    </section>
  )
}
