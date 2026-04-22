'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  return (
    <section id="waitlist" ref={ref} style={{ padding:'120px 32px',background:'#000' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'} style={{ maxWidth:'560px',margin:'0 auto' }}>
        <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'2px',color:'#555',marginBottom:'32px' }}>EARLY ACCESS</motion.div>
        <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'clamp(32px,5vw,56px)',color:'#fff',letterSpacing:'-1.5px',lineHeight:1.1,marginBottom:'24px' }}>Get in before<br />it opens.</motion.h2>
        <motion.p variants={fadeUp} style={{ fontSize:'17px',color:'#888',lineHeight:1.7,marginBottom:'40px' }}>OTJ App launches Q3 2026. Early access goes to founding investors and Fellowship members first.</motion.p>
        {!submitted ? (
          <motion.div variants={fadeUp} style={{ display:'flex' }}>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com"
              style={{ flex:1,background:'transparent',border:'1px solid #333',borderRight:'none',padding:'14px 20px',color:'#fff',fontFamily:'var(--font-inter)',fontSize:'15px',outline:'none' }}
              onFocus={e=>(e.currentTarget.style.borderColor='#fff')} onBlur={e=>(e.currentTarget.style.borderColor='#333')} />
            <button onClick={()=>setSubmitted(true)} style={{ background:'#fff',color:'#000',padding:'14px 28px',border:'none',fontFamily:'var(--font-sg)',fontWeight:700,fontSize:'15px',cursor:'pointer' }}>Reserve →</button>
          </motion.div>
        ) : (
          <motion.div variants={fadeUp} style={{ padding:'20px',border:'1px solid #fff' }}>
            <span style={{ fontFamily:'var(--font-sg)',color:'#fff',fontSize:'15px' }}>You are on the list. We will reach out.</span>
          </motion.div>
        )}
        <motion.p variants={fadeUp} style={{ fontFamily:'var(--font-inter)',fontSize:'12px',color:'#444',marginTop:'16px' }}>No spam. One email when access opens.</motion.p>
      </motion.div>
    </section>
  )
}
