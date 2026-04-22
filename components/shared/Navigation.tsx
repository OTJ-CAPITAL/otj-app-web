'use client'
import { useEffect, useState } from 'react'
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const fn = () => setScrolled(window.scrollY>20); window.addEventListener('scroll',fn); return ()=>window.removeEventListener('scroll',fn) },[])
  return (
    <nav style={{ position:'fixed',top:0,left:0,right:0,zIndex:100,background:scrolled?'rgba(255,255,255,0.95)':'#fff',borderBottom:scrolled?'1px solid #E5E5E5':'1px solid transparent',backdropFilter:scrolled?'blur(8px)':'none',transition:'all 0.2s',padding:'0 32px',height:'60px',display:'flex',alignItems:'center',justifyContent:'space-between' }}>
      <span style={{ fontFamily:'var(--font-sg)',fontWeight:700,fontSize:'16px',letterSpacing:'-0.5px' }}>OTJ App</span>
      <div style={{ display:'flex',gap:'32px',alignItems:'center' }}>
        {['Features','Dashboard'].map(item=><a key={item} href={`#${item.toLowerCase()}`} style={{ fontFamily:'var(--font-inter)',fontSize:'14px',color:'#555' }}>{item}</a>)}
        <a href="#waitlist" style={{ background:'#000',color:'#fff',padding:'8px 18px',fontSize:'14px',fontFamily:'var(--font-sg)',fontWeight:600 }}>Get Access</a>
      </div>
    </nav>
  )
}
