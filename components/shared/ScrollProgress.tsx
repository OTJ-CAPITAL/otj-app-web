'use client'
import { useEffect, useState } from 'react'
export default function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
    }
    window.addEventListener('scroll', update)
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <div style={{ position:'fixed', top:0, left:0, height:'2px', width:`${pct}%`, background:'#000', zIndex:200, transition:'width 0.1s linear' }} />
}
