'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="waitlist" ref={ref} style={{ background: '#0D0D0D', padding: '120px 32px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 52px)', color: '#FFFFFF', marginBottom: '24px' }}>Get access first.</motion.h2>
        <motion.p variants={fadeUp} style={{ fontFamily: 'Inter', fontSize: '18px', color: '#888888', marginBottom: '48px', lineHeight: 1.7 }}>
          OTJ App launches Q3 2026. Early access reserved for founding investors and Fellowship members.
        </motion.p>
        {!submitted ? (
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '0', marginBottom: '16px' }}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
              style={{ flex: 1, background: 'transparent', border: '1px solid #2A2A2A', borderRight: 'none', padding: '14px 20px', color: '#FFFFFF', fontFamily: 'Inter', fontSize: '15px', outline: 'none', borderRadius: '2px 0 0 2px' }}
              onFocus={e => (e.currentTarget.style.borderColor = '#C9A84C')}
              onBlur={e => (e.currentTarget.style.borderColor = '#2A2A2A')} />
            <button onClick={() => setSubmitted(true)} style={{ background: '#C9A84C', color: '#080808', padding: '14px 28px', border: 'none', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', cursor: 'pointer', borderRadius: '0 2px 2px 0' }}>Reserve →</button>
          </motion.div>
        ) : (
          <motion.div variants={fadeUp} style={{ padding: '20px', background: 'rgba(201,168,76,0.1)', border: '1px solid #C9A84C', borderRadius: '4px', marginBottom: '16px' }}>
            <span style={{ fontFamily: 'Space Grotesk', color: '#C9A84C' }}>You are on the list. We will be in touch.</span>
          </motion.div>
        )}
        <motion.p variants={fadeUp} style={{ fontFamily: 'Inter', fontSize: '13px', color: '#555555' }}>No spam. One email when access opens.</motion.p>
      </motion.div>
    </section>
  )
}
